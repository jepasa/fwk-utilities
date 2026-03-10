/**
 * @file src/lang/i18n-conf.js — v1.0.0
 *
 * Nome: i18n-conf
 *
 * O que é:
 * - Arquivo de configuração centralizado do sistema i18n do FWK Utilities.
 *
 * Para que serve:
 * - Reunir todos os valores configuráveis utilizados por `i18n-core.ts` e `i18n-adapter.ts`
 *   em um único ponto, facilitando customização e inspeção em projetos que consomem o plugin.
 *
 * Nota de build:
 * - Este arquivo NÃO é minificado nem ofuscado na saída de produção (public-mirror/dist/lang/).
 *   Isso é intencional: permite que integradores leiam as configurações vigentes diretamente
 *   no artefato distribuído.
 *
 * Como usar:
 * - Importe as constantes exportadas nos módulos que precisam das configurações:
 *     import { DEFAULT_LOCALE, GLOBAL_KEY, SHORT_TO_CANONICAL } from './i18n-conf.js';
 *
 * Autor: Jeferson Padilha (https://jepasa.com)
 * Licença: All rights reserved.
 */
// ─── Configurações base do Manager (consumidas por i18n-core.ts) ──────────────
/**
 * Locale padrão (fallback final) aplicado quando nenhum outro locale puder ser
 * resolvido — seja por ausência de dicionário, ausência de `<html lang>` ou de
 * `navigator.language`.
 *
 * Deve seguir o formato IETF BCP 47 (ex.: 'en-US', 'pt-BR', 'de-DE').
 *
 * Usado em:
 * - `createManager({ defaultLocale })` → `i18n-core.ts`
 * - `createManager({ defaultLocale: DEFAULT_LOCALE })` → `i18n-adapter.ts`
 *
 * @type {string}
 */
export const DEFAULT_LOCALE = 'en-US';
/**
 * Chave do objeto global (`window` / `self`) onde dicionários externos podem ser
 * injetados antes da inicialização do plugin.
 *
 * Isso permite que projetos consumidores registrem traduções adicionais via `<script>`
 * sem modificar os artefatos do plugin:
 *
 * @example
 * // No HTML, antes de carregar o plugin:
 * window.FwkUtilitiesLangLocales = {
 *   'pt-BR': { menu: { mainLabel: 'Menu principal' } }
 * };
 *
 * Usado em:
 * - `createManager({ globalKey })` → `i18n-core.ts`
 * - `createManager({ globalKey: GLOBAL_KEY })` → `i18n-adapter.ts`
 *
 * @type {string}
 */
const _globalKeyCtx = (() => {
    try {
        const url = import.meta.url;
        // Contexto de módulo: …/modules/<name>/lang/lib/
        const mod = url.match(/\/modules\/([^/]+)\/lang\//u);
        if (mod) {
            const name = mod[1].replace(/-([a-z])/gu, (_, c) => c.toUpperCase());
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
        // Contexto do core: <plugin>[-dev]/(src|dist)/lang/lib/
        const core = url.match(/\/([^/]+?)(?:-dev)?\/(?:src|dist)\/lang\/lib\//u);
        if (core) {
            const name = core[1].replace(/-([a-z])/gu, (_, c) => c.toUpperCase());
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
    }
    catch {
        /* testes/CJS */
    }
    return 'FwkUtilities';
})();
export const GLOBAL_KEY = `${_globalKeyCtx}LangLocales`;
// ─── Configurações do Adapter (consumidas por i18n-adapter.ts) ───────────────
/**
 * Mapa de atalhos de locale curto → locale canônico completo IETF BCP 47.
 *
 * Permite que integradores passem apenas a parte primária da tag de idioma
 * (ex.: `language: 'pt'`) e o sistema resolve automaticamente para o locale
 * canônico registrado (ex.: `'pt-BR'`).
 *
 * Formato:
 * - Chave: subtag principal do idioma em minúsculas (ex.: 'pt', 'es', 'zh')
 * - Valor: locale canônico completo (ex.: 'pt-BR', 'es-ES', 'zh-CN')
 *
 * Para adicionar um novo idioma com atalho curto, inclua a entrada aqui **e**
 * registre o dicionário correspondente em `i18n-adapter.ts`.
 *
 * Usado em:
 * - `createManager({ shortToCanonical: SHORT_TO_CANONICAL })` → `i18n-adapter.ts`
 *
 * @type {Record<string, string>}
 */
export const SHORT_TO_CANONICAL = {
    /** Português → Português do Brasil */
    pt: 'pt-BR',
    /** Espanhol → Espanhol da Espanha */
    es: 'es-ES',
    /** Francês → Francês da França */
    fr: 'fr-FR',
    /** Alemão → Alemão da Alemanha */
    de: 'de-DE',
    /** Chinês → Chinês Simplificado */
    zh: 'zh-CN',
};
/**
 * Lista de locales opcionais (não-inglês) que possuem dicionários próprios
 * em `src/lang/`.
 *
 * Comportamento por tipo de artefato:
 * - **dist modular** (`public-mirror/dist/`): todos os locales são incluídos
 *   com seus dicionários completos.
 * - **bundle IIFE** (`public-mirror/bundle/`): estes locales são stubeados
 *   (`export default null`) pelo plugin Rollup para reduzir o tamanho do bundle.
 *   Eles devem ser carregados sob demanda via `loadLocale()`.
 *
 * O dicionário de `'en-US'` e `'en'` **nunca** entra nesta lista — eles são
 * sempre embutidos como fallback obrigatório.
 *
 * Usado em:
 * - `createManager({ dictionaries })` → `i18n-adapter.ts` (filtro de nulos)
 * - `BUNDLE_STUB_LANGS` → `scripts/build-mtdp.js` (plugin Rollup de stub)
 *
 * @type {string[]}
 */
export const OPTIONAL_LOCALES = ['pt-BR', 'es-ES', 'fr-FR', 'de-DE', 'zh-CN'];
/**
 * Nome da chave global para callback de resolução de locale na página.
 *
 * Contrato esperado:
 * - `window[GLOBAL_LOCALE_CALLBACK_KEY]` recebe `locale` e pode retornar:
 *   - um dicionário (objeto) do locale solicitado; ou
 *   - um mapa de locales (`{ 'pt-BR': {...}, ... }`).
 *
 * @type {string}
 */
export const GLOBAL_LOCALE_CALLBACK_KEY = `${GLOBAL_KEY}Callback`;
function readGlobalLocalesObject() {
    const source = ROOT_REF?.[GLOBAL_KEY];
    return source && typeof source === 'object' ? source : null;
}
function readLocaleViaCallback(locale) {
    const callback = ROOT_REF?.[GLOBAL_LOCALE_CALLBACK_KEY];
    if (typeof callback !== 'function')
        return null;
    try {
        const result = callback(locale);
        if (!result || typeof result !== 'object')
            return null;
        return result;
    }
    catch {
        return null;
    }
}
function pickLocaleFromMap(mapObj, locale) {
    if (!mapObj || typeof mapObj !== 'object')
        return null;
    const direct = mapObj[locale];
    if (direct && typeof direct === 'object')
        return direct;
    return null;
}
/**
 * Retorna os dicionários iniciais para o adapter, respeitando a ordem definida
 * em `OPTIONAL_LOCALES`.
 *
 * Regras aplicadas:
 * - Sempre tenta resolver o locale padrão (`DEFAULT_LOCALE`) primeiro.
 * - Mantém alias `en` para compatibilidade retroativa.
 * - Resolve dicionários via objeto/callback global da página.
 * - Usa a ordem de `OPTIONAL_LOCALES` para montagem determinística.
 *
 * @returns {Record<string, unknown>}
 */
export function getAdapterDictionaries() {
    const dictionaries = {};
    const globalLocales = readGlobalLocalesObject();
    const resolveLocale = (locale) => {
        const callbackResult = readLocaleViaCallback(locale);
        const fromCallbackMap = pickLocaleFromMap(callbackResult, locale);
        if (fromCallbackMap)
            return fromCallbackMap;
        if (callbackResult && !fromCallbackMap)
            return callbackResult;
        const fromGlobal = pickLocaleFromMap(globalLocales, locale);
        return fromGlobal || null;
    };
    const defaultDictionary = resolveLocale(DEFAULT_LOCALE);
    if (defaultDictionary && typeof defaultDictionary === 'object') {
        dictionaries[DEFAULT_LOCALE] = defaultDictionary;
        if (DEFAULT_LOCALE.toLowerCase().startsWith('en-')) {
            dictionaries.en = defaultDictionary;
        }
    }
    OPTIONAL_LOCALES.forEach((locale) => {
        const value = resolveLocale(locale);
        if (value && typeof value === 'object') {
            dictionaries[locale] = value;
        }
    });
    return dictionaries;
}
/**
 * Referência ao objeto global do ambiente de execução.
 *
 * Prioridade de resolução:
 * 1. `self`  — disponível em Workers, Service Workers e browsers modernos.
 * 2. `window` — disponível em browsers sem suporte a `self`.
 * 3. `null`  — ambientes sem janela (Node.js, SSR, testes isolados).
 *
 * O manager usa esta referência para ler dicionários injetados externamente via
 * `window[GLOBAL_KEY]` ou `self[GLOBAL_KEY]`.
 *
 * Usado em:
 * - `createManager({ rootRef: ROOT_REF })` → `i18n-adapter.ts`
 *
 * @type {Record<string, unknown> | null}
 */
export const ROOT_REF = typeof self !== 'undefined'
    ? /** @type {Record<string, unknown>} */ ( /** @type {unknown} */(self))
    : typeof window !== 'undefined'
        ? /** @type {Record<string, unknown>} */ ( /** @type {unknown} */(window))
        : null;
