# Changelog

Este changelog registra mudanças do artefato público distribuído em `public-mirror/`.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
e versionamento em [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Novo módulo `dropdown-utility`: extensão complementar do Bootstrap 5 Dropdown com hover, flip automático, animações CSS, submenus aninhados (até 3 níveis), megamenu responsivo e navegação por teclado WCAG 2.1 AA.

## [4.1.1] — 2026-03-10

### Fixed

- **`sidebar-utility`**: botão de drill-back e botão de grupo collapse-out agora usam DOM seguro (`appendSvgMarkup` / `appendTextAndIcon`) em vez de interpolação de `innerHTML`, prevenindo XSS com labels traduzidos maliciosos.
- **`lightbox-utility`**: labels traduzidos interpolados no template HTML são escapados via `escapeHtml`; `aria-label` do dialog é aplicado diretamente via `setAttribute` (sem escape duplo).
- **`infinite-scroll-utility`**: texto do spinner é inserido via `textContent` em vez de interpolação HTML, prevenindo execução de payloads em strings de tradução.

### Added

- Tipos públicos TypeScript disponíveis em `src/fwk-utilities.d.ts`.

## [4.1.0] — 2025-07-28

### Added

- **`sidebar-utility`**: novo modo `collapse-out` — barra lateral icon-only com painel lateral flutuante que exibe submenus de forma não-intrusiva.

### Fixed

- **`sidebar-utility`**: `destroy()` agora remove corretamente o `.fwku-drill-container`.
- **`sidebar-utility`**: flyout reposicionado de `position:fixed` para `position:absolute` com `isolation:isolate`.
- **`sidebar-utility`**: `openCollapseOutPanel()` limita `maxHeight` do painel ao `offsetHeight` do sidebar.
- **`menu-utility`**: `destroy()` remove o elemento `<style id="fwku-submenu-style">` injetado.

## [4.0.0] — 2025-07-22

### Breaking Changes

- **Novos paths de módulos**: `dist/lib/js/{name}-utility.min.js` → `dist/modules/{name}/index.min.js`. Atualize importações diretas de submódulos individuais.

### Changed

- Estrutura interna reorganizada em `modules/{name}/index.min.js` — cada módulo é independente e autônomo.
- Loader do orquestrador simplificado.

## [1.3.1] — 2026-02-22

### Added

- Criação do `public-mirror/` como artefato público versionado.
- Regras de distribuição entre repositório privado (engenharia) e repositório público (espelho do `public-mirror/`).

### Changed

- Build único `npm run build` para gerar `public-mirror/dist/` (modular + bundle minificado).

### Removed

- Consolidado o processo de build em um único comando: `npm run build`.
