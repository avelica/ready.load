/* LOAD - 20110706-v1.5 */
jQuery.noConflict();
jQuery(function($){
  var list = ready();
  var path = ready.path;
  var meta = ready.meta;
  var poly = ready.polyfill;
  
  window.ready = function(){
    var args = arguments;
    var call = args[0];
    if(typeof(call)=='function'){
      call($);
    }else{
      var req = $.makeArray(args[0]).reverse();
      call = args[1];
      var load = function(){
        if(req.length==0) { if($.isFunction(call)) call($); return; }
        var item = req.pop();
        if(item){
          var url = item.replace(/^\/|\/$/g,'');
          if(url.indexOf('/')==-1) url = path + url
          $.ajax({
            url: url,
            dataType: 'script',
            cache: true,
            global: false,
            success: load
          });
        }
      }
      load();
    }
  }
  
  // execute preconfigured scripts
  $(list).each(function(){
    if(this.length>1) window.ready(this[0], this[1]);
    else window.ready(this[0]);
  });
  
  // autoload polyfills
  for(var fill in polys) {
    var test = polys[fill];
    if(typeof(test)=='function') if(!test()) break;
    else if($(test).length==0) break;
    window.ready(path+'polyfill/'+fill+'.js');
  }
  
  // template based classes and scripts
  if(metatags.layout) window.ready(metatags.layout+'.js');
  
  //google
  if(meta['google-analytics']) {
    var account = meta['google-analytics'];
    var head = $('head');
    $('<script />').html('var _gaq = [[\'_setAccount\', \''+account+'\'], [\'_trackPageview\']];').appendTo(head);
    $('<script />').attr({
      async:true,
      src: ('https:' == location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'
    }).appendTo(head);
  }
  
});