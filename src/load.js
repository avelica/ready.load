/* LOAD - 20110628-v1.4 */
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
  
  var html = $('html');
  
  var debounce = function (func, threshold) {
    var timeout;
    return function () {
      var obj = this,
      args = arguments,
      delayed = function () {
        func.apply(obj, args);
        timeout = null;
      };
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(delayed, 50);
    };
  };
  
  var resize = function(){
    html[0].className=html[0].className.replace(/ (w|lt)-\d+/g, '');
    var w = $(this).width();
    var sizes = [1920,1680,1440,1280,1024,768,640,480,320];
    for(i in sizes) { i=sizes[i]; html.addClass( (i>=w?'lt':'gt')+'-'+i); }
  }
  
  $(window).bind('resize', debounce(resize)).bind('orientationchange',resize);
  
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
    window.ready(fill+'.js');
  }
  
  // template based classes and scripts
  $('meta[name=layout]').each(function(){
    window.ready($(this).attr('content')+'.js');
  });
  
  //google
  $('meta[name=google-analytics]').each(function(){
    var account = $(this).attr('content');
    var head = $('head');
    $('<script />').html('var _gaq = [[\'_setAccount\', \''+account+'\'], [\'_trackPageview\']];').appendTo(head);
    $('<script />').attr({
      async:true,
      src: ('https:' == location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'
    }).appendTo(head);

  });
  
});