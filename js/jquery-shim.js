/**
 * jQuery global alias shim for CiviCRM Standalone + the CIPICO theme.
 *
 * CiviCRM exposes jQuery only as `cj` / `CRM.$` on standalone (and the
 * greenwich `noConflict.js` / core `noconflict.js` release the `$`/`jQuery`
 * globals *after* this file runs). Some legacy theme/extension scripts (e.g.
 * fpsHelper.min.js) call the `jQuery(...)` global directly, which throws
 * "jQuery is not a function" on standalone.
 *
 * Re-publish the existing jQuery as `window.jQuery` if it is missing. Because
 * CiviCRM's no-conflict script runs during parsing (after this file but before
 * DOMContentLoaded), we re-publish both immediately and once the document has
 * finished parsing / loading.
 */
(function () {
  function publish() {
    if (typeof window.jQuery === 'function') {
      return;
    }
    var jq = window.cj || (window.CRM && window.CRM.$) || window.$;
    if (typeof jq === 'function') {
      window.jQuery = jq;
    }
  }

  publish();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', publish);
  }
  else {
    publish();
  }
  window.addEventListener('load', publish);
})();
