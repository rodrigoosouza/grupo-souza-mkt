(function () {

  // ── DOMAIN dinâmico — funciona em qualquer domínio ───────────────
  var DOMAIN = (function () {
    var host = window.location.hostname;
    if (host === 'localhost' || /^[\d.]+$/.test(host)) return '';
    var parts = host.split('.');
    var twoLevelTlds = ['com.br','co.uk','com.au','co.jp','co.kr','com.mx','com.ar','co.nz','co.za','com.sg','com.pt','net.br','org.br'];
    var tail2 = parts.slice(-2).join('.');
    if (twoLevelTlds.indexOf(tail2) !== -1 && parts.length >= 3) {
      return '.' + parts.slice(-3).join('.');
    }
    if (parts.length <= 2) return '.' + host;
    return '.' + parts.slice(-2).join('.');
  })();

  var MAX_AGE = 63072000; // 2 anos em segundos

  var utms   = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  var clicks = ['gclid','gbraid','wbraid','fbclid','ttclid','gad_campaignid','gad_source','msclkid','li_fat_id','twclid','sck'];

  // ── Helpers ──────────────────────────────────────────────────────

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  function setCookie(name, value) {
    var domainPart = DOMAIN ? '; domain=' + DOMAIN : '';
    document.cookie = name + '=' + encodeURIComponent(value) +
      '; max-age=' + MAX_AGE +
      '; path=/' +
      domainPart +
      '; SameSite=Lax';
  }

  function setCookieFirstTouch(name, value) {
    if (getCookie(name)) {
      console.log('[FT] Travado:', name, '=', getCookie(name));
      return;
    }
    setCookie(name, value);
    console.log('[FT] Salvo:', name, '=', value);
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function isInternalReferrer(referrer) {
    if (!referrer) return false;
    try {
      var ref = new URL(referrer).hostname;
      var cur = window.location.hostname;
      return ref === cur ||
             ref.endsWith('.' + cur.replace('www.','')) ||
             cur.endsWith('.' + ref.replace('www.',''));
    } catch (e) { return false; }
  }

  // ── Session ID ───────────────────────────────────────────────────

  var sessionId = (function () {
    try {
      var key = 'apex_session_id';
      var s = sessionStorage.getItem(key);
      if (!s) {
        s = Date.now() + '_' + Math.random().toString(36).substring(2, 11);
        sessionStorage.setItem(key, s);
      }
      return s;
    } catch (e) {
      return Date.now() + '_' + Math.random().toString(36).substring(2, 11);
    }
  })();

  // ── Mapeamento de referrer ────────────────────────────────────────

  var referrerMap = {
    'google.com':        { utm_source: 'google',       utm_medium: 'organic' },
    'bing.com':          { utm_source: 'bing',         utm_medium: 'organic' },
    'yahoo.com':         { utm_source: 'yahoo',        utm_medium: 'organic' },
    'duckduckgo.com':    { utm_source: 'duckduckgo',   utm_medium: 'organic' },
    'yandex.com':        { utm_source: 'yandex',       utm_medium: 'organic' },
    'instagram.com':     { utm_source: 'instagram',    utm_medium: 'organic' },
    'youtube.com':       { utm_source: 'youtube',      utm_medium: 'organic' },
    'facebook.com':      { utm_source: 'facebook',     utm_medium: 'organic' },
    'twitter.com':       { utm_source: 'twitter',      utm_medium: 'organic' },
    'x.com':             { utm_source: 'twitter',      utm_medium: 'organic' },
    'linkedin.com':      { utm_source: 'linkedin',     utm_medium: 'organic' },
    'tiktok.com':        { utm_source: 'tiktok',       utm_medium: 'organic' },
    'pinterest.com':     { utm_source: 'pinterest',    utm_medium: 'organic' },
    'whatsapp.com':      { utm_source: 'whatsapp',     utm_medium: 'organic' },
    'telegram.org':      { utm_source: 'telegram',     utm_medium: 'organic' },
    'reddit.com':        { utm_source: 'reddit',       utm_medium: 'organic' },
    'chat.openai.com':   { utm_source: 'chatgpt',      utm_medium: 'ai' },
    'chatgpt.com':       { utm_source: 'chatgpt',      utm_medium: 'ai' },
    'gemini.google.com': { utm_source: 'gemini',       utm_medium: 'ai' },
    'claude.ai':         { utm_source: 'claude',       utm_medium: 'ai' },
    'poe.com':           { utm_source: 'poe',          utm_medium: 'ai' },
    'wikipedia.org':     { utm_source: 'wikipedia',    utm_medium: 'referral' },
    'github.com':        { utm_source: 'github',       utm_medium: 'referral' }
  };

  // ── 1. UTMs da URL — first touch ─────────────────────────────────

  var hasUtmInUrl = utms.some(function (p) { return !!getParam(p); });

  if (hasUtmInUrl) {
    utms.forEach(function (p) {
      var val = getParam(p) || '';
      setCookieFirstTouch(p, val);
    });
  } else {
    // ── 2. Fallback: referrer mapping — first touch ───────────────
    var referrer = document.referrer || '';
    if (referrer && !isInternalReferrer(referrer)) {
      for (var domain in referrerMap) {
        if (referrer.indexOf(domain) !== -1) {
          var map = referrerMap[domain];
          utms.forEach(function (p) {
            setCookieFirstTouch(p, map[p] || '');
          });
          console.log('[Referrer] Mapeado:', domain, map);
          break;
        }
      }
    }
  }

  // ── 3. Click params — first touch ────────────────────────────────

  clicks.forEach(function (p) {
    var val = getParam(p);
    if (val) setCookieFirstTouch(p, val);
  });

  // ── 4. Gera _fbc se veio fbclid ──────────────────────────────────

  var fbclid = getParam('fbclid');
  if (fbclid && !getCookie('_fbc')) {
    setCookie('_fbc', 'fb.1.' + Date.now() + '.' + fbclid);
  }

  // ── 5. First visit — salva timestamp e landing page ──────────────

  if (!getCookie('first_visit')) {
    setCookie('first_visit', new Date().toISOString());
  }

  if (!getCookie('landing_page')) {
    setCookie('landing_page', window.location.href);
  }

  if (!getCookie('origin_page')) {
    var originRef = document.referrer || '';
    if (originRef && !isInternalReferrer(originRef)) {
      setCookie('origin_page', originRef);
    }
  }

  // ── 6. Ref param ─────────────────────────────────────────────────

  var refParam = getParam('ref');
  if (refParam && !getCookie('ref')) {
    setCookie('ref', refParam);
  }

  // ── 7. User Agent ─────────────────────────────────────────────────

  setCookie('user_agent', navigator.userAgent);

  // ── 8. Session attributes encoded ─────────────────────────────────

  var sessionAttrs = {
    utm_source:    getCookie('utm_source')   || '',
    utm_medium:    getCookie('utm_medium')   || '',
    utm_campaign:  getCookie('utm_campaign') || '',
    utm_content:   getCookie('utm_content')  || '',
    utm_term:      getCookie('utm_term')     || '',
    gclid:         getCookie('gclid')        || '',
    fbclid:        getCookie('fbclid')       || '',
    ttclid:        getCookie('ttclid')       || '',
    msclkid:       getCookie('msclkid')      || '',
    landing_page:  getCookie('landing_page') || '',
    origin_page:   getCookie('origin_page')  || '',
    first_visit:   getCookie('first_visit')  || '',
    ref:           getCookie('ref')          || ''
  };
  try {
    setCookie('session_attributes_encoded', btoa(JSON.stringify(sessionAttrs)));
  } catch (e) {}

  // ── 9. Preenche hidden inputs do form ────────────────────────────

  function fillHiddenInputs() {
    utms.concat(clicks).forEach(function (p) {
      var val = getCookie(p);
      if (!val) return;
      document.querySelectorAll(
        'input[name="' + p + '"], input[data-field-id="' + p + '"]'
      ).forEach(function (f) { f.value = val; });
    });
  }
  fillHiddenInputs();

  // Re-popula em forms que aparecem depois (modais, dynamic content)
  if (typeof MutationObserver !== 'undefined') {
    var fillObs = new MutationObserver(function () { fillHiddenInputs(); });
    var startFillObs = function () {
      fillObs.observe(document.body || document.documentElement, { childList: true, subtree: true });
    };
    if (document.body) startFillObs();
    else document.addEventListener('DOMContentLoaded', startFillObs);
  }

  // ── 10. DataLayer ────────────────────────────────────────────────

  window.dataLayer = window.dataLayer || [];
  var dl = {};

  // First-touch (cookie - nunca sobrescreve)
  utms.concat(clicks).forEach(function (p) {
    var val = getCookie(p);
    if (val) dl['ft_' + p] = val;
  });

  // Last-touch UTMs (URL atual - atualiza a cada visita/sessão)
  utms.forEach(function (p) {
    var fromUrl = getParam(p);
    if (fromUrl) {
      dl[p] = fromUrl;
    } else {
      var ref = document.referrer;
      var detected = null;
      if (ref) {
        for (var d in referrerMap) {
          if (ref.indexOf(d) !== -1) {
            detected = referrerMap[d];
            break;
          }
        }
      }
      if (detected && p === 'utm_source')      dl[p] = detected.utm_source;
      else if (detected && p === 'utm_medium') dl[p] = detected.utm_medium;
      else                                      dl[p] = getCookie(p) || '';
    }
  });

  // Last-touch click IDs (URL atual)
  clicks.forEach(function (p) {
    var fromUrl = getParam(p);
    if (fromUrl) dl[p] = fromUrl;
    else         dl[p] = getCookie(p) || '';
  });

  // Campos extras no dataLayer
  dl.session_id                 = sessionId;
  dl.landing_page               = getCookie('landing_page') || '';
  dl.origin_page                = getCookie('origin_page')  || '';
  dl.first_visit                = getCookie('first_visit')  || '';
  dl.ref                        = getCookie('ref')          || '';
  dl.user_agent                 = navigator.userAgent;
  dl.session_attributes_encoded = getCookie('session_attributes_encoded') || '';

  if (Object.keys(dl).length) window.dataLayer.push(dl);

  // Dispara page_view com todos os dados de tracking
  window.dataLayer.push({
    event:         'custom_page_view',
    session_id:    sessionId,
    page_url:      window.location.href,
    page_path:     window.location.pathname,
    page_hostname: window.location.hostname,
    referrer:      document.referrer || ''
  });

  console.log('[Cookie Tracker] Estado final:', dl);
  console.log('[Cookie Tracker] Session ID:', sessionId);

  // ── 11. Clarity Custom Tags ──────────────────────────────────────
  (function () {
    function setClarity() {
      if (typeof window.clarity !== 'function') return;
      var utmSource   = getCookie('utm_source')   || getCookie('ft_utm_source')   || '';
      var utmMedium   = getCookie('utm_medium')   || getCookie('ft_utm_medium')   || '';
      var utmCampaign = getCookie('utm_campaign') || getCookie('ft_utm_campaign') || '';
      var extId       = getCookie('external_id')  || '';

      if (utmSource)   window.clarity('set', 'utm_source',   utmSource);
      if (utmMedium)   window.clarity('set', 'utm_medium',   utmMedium);
      if (utmCampaign) window.clarity('set', 'utm_campaign', utmCampaign);
      if (extId)       window.clarity('set', 'external_id',  extId);
    }

    setClarity();
    setTimeout(setClarity, 2000);

    document.addEventListener('submit', function () {
      setTimeout(function () {
        if (typeof window.clarity !== 'function') return;
        var email = getCookie('cookie_email') || '';
        var name  = getCookie('cookie_first') || '';
        if (email) window.clarity('set', 'lead_email', email);
        if (name)  window.clarity('set', 'lead_name',  name);
        window.clarity('set', 'converted', 'true');
      }, 500);
    }, true);
  })();

  // ── 12. Scroll Depth ─────────────────────────────────────────────
  (function () {
    var milestones = [25, 50, 75, 90];
    var reached = {};
    var pageStart = Date.now();

    function getScrollPercent() {
      var doc = document.documentElement;
      var body = document.body;
      var scrollTop = doc.scrollTop || body.scrollTop;
      var scrollHeight = Math.max(doc.scrollHeight, body.scrollHeight) - doc.clientHeight;
      if (scrollHeight <= 0) return 100;
      return Math.round((scrollTop / scrollHeight) * 100);
    }

    function onScroll() {
      var pct = getScrollPercent();
      milestones.forEach(function (m) {
        if (!reached[m] && pct >= m) {
          reached[m] = true;
          var timeOnPage = Math.round((Date.now() - pageStart) / 1000);
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event:         'scroll_depth',
            session_id:    sessionId,
            scroll_depth:  m,
            time_on_page:  timeOnPage,
            page_path:     window.location.pathname
          });
          console.log('[Cookie Tracker] Scroll ' + m + '% atingido em ' + timeOnPage + 's');
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  })();

  // ── 13. Time on Page ─────────────────────────────────────────────
  (function () {
    var pageStart = Date.now();

    // Captura tempo no submit do form
    document.addEventListener('submit', function () {
      var timeOnPage = Math.round((Date.now() - pageStart) / 1000);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        session_id:             sessionId,
        time_on_page_at_submit: timeOnPage,
        page_path:              window.location.pathname
      });
    }, true);

    // Heartbeat a cada 30s, máx 10 min
    var heartbeatCount = 0;
    var heartbeat = setInterval(function () {
      heartbeatCount++;
      var timeOnPage = Math.round((Date.now() - pageStart) / 1000);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event:        'time_on_page_heartbeat',
        session_id:   sessionId,
        time_on_page: timeOnPage,
        heartbeat:    heartbeatCount,
        page_path:    window.location.pathname
      });
      if (heartbeatCount >= 20) clearInterval(heartbeat);
    }, 30000);
  })();

  // ── 14. Cross-link UTM propagation ───────────────────────────────
  // Reinjeta UTMs/click IDs na URL atual e propaga em todos os <a>
  // Internos: tudo (utm + click + fbp/fbc); externos: só utm + fbp/fbc

  var PROPAGATION_BLOCKLIST = [
    'facebook.com','instagram.com','twitter.com','x.com','linkedin.com',
    'tiktok.com','youtube.com','pinterest.com','whatsapp.com','t.me','telegram.org',
    'reddit.com','google.com','bing.com','yahoo.com','duckduckgo.com','yandex.com',
    'baidu.com','wikipedia.org','chatgpt.com','chat.openai.com','claude.ai',
    'gemini.google.com','bard.google.com','poe.com','character.ai','github.com',
    'stackoverflow.com'
  ];

  var ALL_PROPAGATE  = utms.concat(clicks).concat(['fbp','fbc']);
  var SAFE_PROPAGATE = utms.concat(['fbp','fbc']);

  function isInternalDestination(href) {
    try {
      var u = new URL(href, window.location.href);
      var root = DOMAIN.replace(/^\./, '');
      return u.hostname === window.location.hostname ||
             (root && (u.hostname === root || u.hostname.endsWith('.' + root)));
    } catch (e) { return false; }
  }

  function shouldPropagateTo(href) {
    try {
      var u = new URL(href, window.location.href);
      if (u.protocol !== 'http:' && u.protocol !== 'https:') return false;
      for (var i = 0; i < PROPAGATION_BLOCKLIST.length; i++) {
        var blocked = PROPAGATION_BLOCKLIST[i];
        if (u.hostname === blocked || u.hostname.endsWith('.' + blocked)) return false;
      }
      return true;
    } catch (e) { return false; }
  }

  function getPropagationData() {
    var data = {};
    ALL_PROPAGATE.forEach(function (p) {
      if (p === 'fbp')      data[p] = getCookie('_fbp') || getCookie('fbp') || '';
      else if (p === 'fbc') data[p] = getCookie('_fbc') || getCookie('fbc') || '';
      else                  data[p] = getCookie(p) || '';
    });
    return data;
  }

  function getParamsForDestination(href) {
    return isInternalDestination(href) ? ALL_PROPAGATE : SAFE_PROPAGATE;
  }

  function updateCurrentUrl() {
    try {
      var url = new URL(window.location.href);
      var data = getPropagationData();
      var changed = false;
      ALL_PROPAGATE.forEach(function (p) {
        var v = data[p];
        if (v && url.searchParams.get(p) !== v) {
          url.searchParams.set(p, v);
          changed = true;
        }
      });
      if (changed) window.history.replaceState({}, '', url.toString());
    } catch (e) {}
  }

  function propagateToLinks() {
    var data = getPropagationData();
    var anchors = document.querySelectorAll('a[href]');
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) continue;
      if (!shouldPropagateTo(href)) continue;
      try {
        var u = new URL(href, window.location.href);
        var params = getParamsForDestination(href);
        var changed = false;
        params.forEach(function (p) {
          var v = data[p];
          if (v && !u.searchParams.has(p)) {
            u.searchParams.set(p, v);
            changed = true;
          }
        });
        if (changed) a.setAttribute('href', u.toString());
      } catch (e) {}
    }
  }

  function attachClickInterceptor() {
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return;
      if (!shouldPropagateTo(href)) return;
      try {
        var data = getPropagationData();
        var u = new URL(href, window.location.href);
        var params = getParamsForDestination(href);
        params.forEach(function (p) {
          if (data[p]) u.searchParams.set(p, data[p]);
        });
        a.setAttribute('href', u.toString());
      } catch (e) {}
    }, true);
  }

  function refreshPropagation() {
    updateCurrentUrl();
    propagateToLinks();
  }

  refreshPropagation();
  attachClickInterceptor();

  if (typeof MutationObserver !== 'undefined') {
    var propTimeout;
    var propObs = new MutationObserver(function () {
      clearTimeout(propTimeout);
      propTimeout = setTimeout(propagateToLinks, 150);
    });
    var startPropObs = function () {
      propObs.observe(document.body || document.documentElement, { childList: true, subtree: true });
    };
    if (document.body) startPropObs();
    else document.addEventListener('DOMContentLoaded', startPropObs);
  }

  // Re-aplica em conteúdo carregado depois (modais, lazy components, etc.)
  [300, 1000, 2000, 3500, 5000, 8000].forEach(function (delay) {
    setTimeout(refreshPropagation, delay);
  });

})();
