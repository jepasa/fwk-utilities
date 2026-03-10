/**
 * File Name: fwku-config.ts — v3.0.0
 * Description: Configurações globais e tipos públicos do FWK Utilities.
 * Author: Jeferson Padilha (https://jepasa.com)
 *
 * INSTRUÇÕES DE CONFIGURAÇÃO PARA O USUÁRIO FINAL
 * ─────────────────────────────────────────────────────────────────────────────
 * Este arquivo contém a configuração padrão do FWK Utilities.
 * O build gera um `.js` não minificado deste arquivo para que o utilizador
 * possa ajustar os valores diretamente em produção sem recompilar.
 * ─────────────────────────────────────────────────────────────────────────────
 */
// ─── Defaults ────────────────────────────────────────────────────────────────
export const DEFAULT_CONFIG = {
    modules: [],
    autoInit: true,
    debug: false,
    language: 'pt-BR',
    autoLanguage: true,
    breakpoint: 992,
    accessibility: {
        announceChanges: true,
        highContrast: false,
    },
    datepicker: {
        allowPastDates: true,
        restrictToPredefinedRange: false,
        allowWeekends: true,
        holidays: [],
        allowMultipleSelection: false,
        maxMultipleSelection: 2,
        multipleOutput: 'comma',
        multipleChipTarget: null,
        showMultipleActions: false,
        availableDates: [],
        includeTime: false,
    },
    export: {
        defaultFormat: 'csv',
        filenamePrefix: 'export',
        csvSeparator: ',',
        pdfOrientation: 'portrait',
        sheetName: 'Dados',
        ofxCurrency: 'BRL',
    },
};
// ─── Módulos disponíveis ──────────────────────────────────────────────────────
export const AVAILABLE_MODULES = [
    'autocomplete',
    'chip',
    'clipboard',
    'color',
    'datepicker',
    'export',
    'infinite-scroll',
    'lazyload',
    'lightbox',
    'menu',
    'skeleton',
    'table',
    'timeline',
    'treeview',
    'sidebar',
];
/**
 * Mapa de nome curto → caminho relativo do módulo (sem extensão).
 * Usado pelo orquestrador em fwk-utilities.ts para carregamento dinâmico.
 * Caminho relativo ao diretório raiz do artefato público (dist/).
 */
export const MODULE_MAP = {
    autocomplete: 'modules/autocomplete/autocomplete-utility',
    chip: 'modules/chip/chip-utility',
    clipboard: 'modules/clipboard/clipboard-utility',
    color: 'modules/color/color-utility',
    datepicker: 'modules/datepicker/datepicker-utility',
    export: 'modules/export/export-utility',
    'infinite-scroll': 'modules/infinite-scroll/infinite-scroll-utility',
    lazyload: 'modules/lazyload/lazyload-utility',
    lightbox: 'modules/lightbox/lightbox-utility',
    menu: 'modules/menu/menu-utility',
    skeleton: 'modules/skeleton/skeleton-utility',
    table: 'modules/table/table-utility',
    timeline: 'modules/timeline/timeline-utility',
    treeview: 'modules/treeview/treeview-utility',
    sidebar: 'modules/sidebar/sidebar-utility',
};
export default { DEFAULT_CONFIG, AVAILABLE_MODULES, MODULE_MAP };
