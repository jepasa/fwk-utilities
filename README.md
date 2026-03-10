# FWK Utilities

Biblioteca modular de utilitários plug-and-play para qualquer framework CSS (Bootstrap 5, Tailwind, Vanilla) — sem dependências além do framework escolhido.

**Versão:** 4.1.1  
**Licença:** Proprietária (uso restrito)  
**Repositório:** https://github.com/jepasa/fwk-utilities

---

## Para quem é

- **Designers** que querem validar rapidamente comportamentos de interface.
- **Times de produto** que precisam evoluir UX com consistência.
- **Usuários com pouca experiência técnica** que desejam aproveitar módulos prontos.

---

## O que você encontra na demo

A demo pública está em `demo/` e apresenta os módulos disponíveis com exemplos visuais.

- Página inicial de demos: `demo/index.html`
- Documentação amigável: `demo/doc/index.html`

---

## Regras de distribuição e carregamento

- Cada módulo pode ser carregado individualmente em `dist/lib/js/{moduleName}-utility.min.js`.
- Todos os módulos podem ser carregados de uma vez por:
  - `dist/fwk-utilities.min.js`
  - `bundle/fwk-utilities.bundle.min.js`
  - CDN jsDelivr (ex.: `https://cdn.jsdelivr.net/gh/jepasa/fwk-utilities@latest/bundle/fwk-utilities.bundle.min.js`)
- No build modular, somente arquivos com sufixo `*.min.js` são ofuscados e minificados; arquivos `*.js` comuns permanecem legíveis para edição e inspeção.
- O bundle é compilado com configurações padrão e locale embutido `en-US`.
- O usuário pode carregar idiomas adicionais manualmente em runtime via callback/API (`registerLocale` / `loadLocale`).
- O usuário pode definir configurações via callback/API na inicialização ou editando `dist/lib/js/fwku-config.js` (arquivo não minificado e não ofuscado).
- Em `dist/lang/`, o usuário pode editar/adicionar idiomas; `dist/lang/lib/i18n-adapter.min.js` e `dist/lang/lib/i18n-core.min.js` são minificados, enquanto `dist/lang/lib/i18n-conf.js` permanece editável.
- Com `autoLanguage` habilitado, qualquer novo idioma adicionado em `dist/lang/` pode ser resolvido automaticamente com fallback para o idioma padrão.

---

## Catálogo de módulos (nome, descrição e status)

| Módulo                      | O que faz                                                                            | Status de desenvolvimento |
| --------------------------- | ------------------------------------------------------------------------------------ | ------------------------- |
| **Menu Utility**            | Cria navegação com múltiplos níveis, incluindo comportamento responsivo e acessível. | **Pronto**                |
| **Table Utility**           | Organiza dados em tabelas com melhor leitura e estrutura visual.                     | **Pronto**                |
| **Datepicker Utility**      | Facilita seleção de datas em formulários e filtros.                                  | **Pronto**                |
| **Autocomplete Utility**    | Sugere resultados automaticamente enquanto a pessoa digita.                          | **Pronto**                |
| **Chip Utility**            | Exibe seleções/filtros em formato de "tags" fáceis de gerenciar.                     | **Pronto**                |
| **Clipboard Utility**       | Permite copiar conteúdo com um clique.                                               | **Pronto**                |
| **Color Utility**           | Apoia escolha e aplicação de cores em componentes de interface.                      | **Pronto**                |
| **Infinite Scroll Utility** | Carrega conteúdo continuamente ao rolar a página.                                    | **Pronto**                |
| **Lazyload Utility**        | Carrega imagens/mídia sob demanda para melhorar performance percebida.               | **Pronto**                |
| **Lightbox Utility**        | Abre imagens/mídia em destaque com foco na visualização.                             | **Pronto**                |
| **Skeleton Utility**        | Exibe placeholders de carregamento para reduzir sensação de espera.                  | **Pronto**                |
| **Timeline Utility**        | Organiza eventos e etapas em linha do tempo visual.                                  | **Pronto**                |
| **Treeview Utility**        | Exibe hierarquias de informação em formato de árvore navegável.                      | **Pronto**                |

> Observação: o status acima reflete o que está disponível hoje na demo pública em `demo/`.

---

## Visão comercial rápida

Com o FWK Utilities, você acelera entregas de interface sem depender de construção do zero para cada interação.

**Benefícios práticos:**

- Experiência visual mais profissional em menos tempo.
- Estrutura de módulos que facilita evolução incremental.
- Base consistente para padronizar UX entre páginas e projetos.
- Suporte a múltiplos frameworks CSS: Bootstrap 5, Tailwind CSS ou Vanilla.

---

## Como validar visualmente (sem programação)

1. Abra a demo principal em `demo/index.html`.
2. Clique no módulo que deseja avaliar.
3. Compare o comportamento no desktop e no mobile.
4. Consulte a documentação em `demo/doc/` para entender objetivo e uso de cada módulo.

---

## Contato e suporte comercial

- **Repositório:** https://github.com/jepasa/fwk-utilities
- **Issues:** https://github.com/jepasa/fwk-utilities/issues
- **Autor:** Jeferson Padilha (jepasa.com)
