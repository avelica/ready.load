/* LOAD - 20110706-v1.5 */
jQuery.noConflict();
jQuery(function($){
  var list = ready();
  var path = ready.path;
  
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
          var url = item;
          if(url.substr(0,1)!='/') url = path + url;
          $.getScript(url,load);
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
  var polys = window.polyfil||{};
  polys['placeholder'] = 'input[placeholder]';
  for(var fill in polys) {
    var test = polys[fill];
    if(typeof(test)=='function'){
      if(!test()) break;
    }else{
      if($(test).length==0) break;
    }
    window.ready(path+'polyfills/'+fill+'.js');
  }
  
  // template based classes and scripts
  if(metatags.layout) window.ready(metatags.layout+'.js');
  
  //google
  if(metatags['google-analytics']) {
    var account = metatags['google-analytics'];
    var head = $('head');
    $('<script />').html('var _gaq = [[\'_setAccount\', \''+account+'\'], [\'_trackPageview\']];').appendTo(head);
    $('<script />').attr({
      async:true,
      src: ('https:' == location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'
    }).appendTo(head);
  }
  
});