/* LOAD - 20110627-v1.2 */
jQuery.noConflict();
jQuery(function($){
  var pack = ready.pack();
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
          if(pack[item]){
            req = $.merge(pack[item],req); load();
          }else{
            var url = item;
            if(url.substr(0,1)!='/') url = path + url;
            $.getScript(url,load);
          }
        }
      }
      load();
    }
  }
  
  $(list).each(function(){
    if(this.req) window.ready(this.req, this.call);
    else window.ready(this.call);
  });
  
  var autoloads = [{
    sel: 'form.validate', req: 'validate.js', call: function(el){ el.validate(); }
  },{
    sel: 'input.hint', req: 'hint.js', call: function(el){ el.hint(); }
  },{
    sel: 'div.flash', req: 'flash.js', call: function(el){ el.flash(); }
  }];
  
  // autoloads
  $.each(autoloads,function(){
    var item = this;
    if(item.sel) {
      var list = $(item.sel);
      if(list.length>0){
        window.ready(item.req,function(){
          list.each(function(){
            item.call($(this));
          });
          
        });
      }
    }else if(item.test){
      if(item.test()) window.ready(item.req,function(){
          item.call();
        });
    }
  });
  
  // template based classes and scripts
  $('meta[name=layout]').each(function(){
    var name = $(this).attr('content');
    //$('html').addClass(name);
    window.ready(name+'.js');
  });
  
  //google
  $('meta[name=google-analytics]').each(function(){
    var account = $(this).attr('content');
    var head = $('head');
    $('<script />').html('var _gaq = [[\'_setAccount\', \''+account+'\'], [\'_trackPageview\']];)').appendTo(head);
    $('<script />').attr({
      async:true,
      src: ('https:' == location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'
    }).appendTo(head);

  });
  
});