/* READY - 20110706-v1.5 */
;(function(win,doc){
  var html = doc.documentElement; /* html element */
  html.className = html.className.replace(/\bno-js\b/, ''); /* remove the /no-js class */
  var addCls = function(n) { html.className += ' ' + n; } /* function for adding additional classes */
  var nav = win.navigator, /* get browser reference */
  w = screen.width, /* get screen width */
  ua = nav.userAgent.toLowerCase(), /* get useragent */
  br = ua.match(/(webkit|opera|ms(ie))/) || ua.indexOf('compatible') < 0 && ua.match(/(moz)illa/); /* check browser engine */
  br = br[2]||br[1]; /* get browser engine name */
  /* ie specific helpers */
  if(br=='ie'){
    var ver = parseFloat(doc.documentMode||nav.appVersion); /* ie version */
    addCls('ie'+ver);
    if(ver<=9) addCls('pie'); /* assign pie class for usage with css3pie.com */
    /* optimized html5 enabler */
    var html5 = 'article|audio|details|figure|footer|header|hgroup|nav|output|section|summary|time|video'.split('|');
    for(i in html5) doc.createElement(html5[i]);
  }
  addCls(br); /* browser engine class */
  addCls((w<700)?'small':(w>699&&w<1280)?'medium':'large'); /* predefined screen size class */
  /* register ready function */
  var list = [], ready = function() {
    if(arguments.length==0) return list;
    list[list.length] = arguments;
  }
  /* meta data collector */
  var m = doc.getElementsByTagName('meta'), meta = [];
  for(i in m) { i = m[i]; if(i.name) meta[i.name] = i.content; }
  if(meta.layout) addCls(meta.layout); /* assign layout based class */
  
  ready.path = '/scripts/'; /* preset script path */
  ready.polyfill = {};
  ready.meta = meta;
  /* exposing ready */
  win.ready = ready;
  
})(window,document);