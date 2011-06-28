/* READY - 20110627-v1.1 */
;(function(win){
  var doc = win.document;
  var html = doc.documentElement; /* html element */
  html.className = html.className.replace(/\\bno-js\\b/, ''); /* remove the /no-js class */
  var addCls = function(n) { html.className += ' ' + n; } /* function for adding additional classes */
  
  /* useragent detection */
  var ua = win.navigator.userAgent.toLowerCase();
  ua = /(webkit)[ \/]([\w.]+)/.exec( ua ) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) || /(msie) ([\w.]+)/.exec( ua ) || !/compatible/.test( ua ) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec( ua ) || [];
  /* handling ie */
  if (ua[1] == 'msie') {
    ua = ['ie', doc.documentMode || ua[2]];
    addCls('ie'+ua[2]); /* ie version classes. ex. ie6 */
    if(ua[2]<=9) addCls('pie'); /* pie specific class for older ie */
    var html5 = "abbr|article|audio|canvas|details|figcaption|figure|footer|header|hgroup|nav|output|section|summary|time|video".split("|"); /* allow html5 elements to be created */
    for (var i = 0; i < html5.length; i++) doc.createElement(html5[i]);
  }
  addCls(ua[1]); /* browser specific class */
  
  var list = [];
  var ready = function() {
    var args = arguments;
    if(args.length==0) return list;
    var o = { call: args[0] };
    if(args.length>1) o = { req: args[0], call: args[1] };
    list[list.length] = o;
    return win
  }

  var pack = [];
  ready.pack = function(){
    var args = arguments;
    if(args.length==0) return pack;
    pack[args[0]] = args[1];
    return win
  }
  
  ready.path = '/scripts/';
  win.ready = ready;
})(window);