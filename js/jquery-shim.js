/**
 * jQuery global alias shim for CiviCRM Standalone + the CIPICO theme.
 *
 * CiviCRM exposes jQuery only as `cj` / `CRM.$` on standalone (and the
 * greenwich `noConflict.js` releases the `$`/`jQuery` globals). Some legacy
 * theme/extension scripts (e.g. fpsHelper.min.js) still call the `jQuery(...)`
 * global directly, which throws "jQuery is not a function" on standalone.
 *
 * Re-publish the existing jQuery as `window.jQuery` if it is missing, so those
 * scripts keep working. No-op when `jQuery` is already a function (e.g. Drupal).
 */
(function () {
  if (typeof window.jQuery === 'function') {
    return;
  }
  var jq = window.cj || (window.CRM && window.CRM.$) || window.$;
  if (typeof jq === 'function') {
    window.jQuery = jq;
  }
})();
