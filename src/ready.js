/* READY - 20110628-v1.3 */
;(function(win,doc){
  var html = doc.documentElement; /* html element */
  html.className = html.className.replace(/\bno-js\b/, ''); /* remove the /no-js class */
  var addCls = function(n) { html.className += ' ' + n; } /* function for adding additional classes */
  
  /* useragent detection */
  var ua = win.navigator.userAgent.toLowerCase();
  var is = function(n,r){ if(ua.indexOf(n)>-1) return r||n; }
  var br = is('ipad') || is('iphone') || is('blackberry') || is('webkit') || is('opera','o') || is('msie','ie') || ua.indexOf('compatible') < 0 && is('mozilla','moz') || '';
  addCls(br);
  if(br=='ie'){
    var ver = doc.documentMode || /(msie) ([\w.]+)/.exec( ua )[2];
    addCls('ie'+ver);
    if(ver<=9) addCls('pie');
    /* allow html5 elements to be created */
    var html5 = 'article|audio|details|figure|footer|header|hgroup|nav|output|section|summary|time|video'.split('|');
    for(i in html5) doc.createElement(html5[i]);
  }

  var w = window.innerWidth || html.clientWidth || 0;
  var sizes = [1920,1680,1440,1280,1024,768,640,480,320];
  for(i in sizes) { i=sizes[i]; addCls((i>=w?'lt':'gt')+'-'+i); }
  
  var list = [];
  var ready = function() {
    if(arguments.length==0) return list;
    list[list.length] = arguments;
  }
  ready.path = '/scripts/'; /* preset script path */
  win.ready = ready; /* expose ready function */
  win.polyfill = []; /* register polyfill object */
})(window,document);