ready(function($){
  $(':text[placeholder]').each(function(){
    var el = $(this);
    var place = el.attr('placeholder');
    if(place){
      var show = function(){
        if ($.trim(el.val()) == '') el.addClass('placeholder').val(place);
      }
      var hide = function(){
        if (el.val() == place) el.removeClass('placeholder').val('');
      }
      el.focus(hide).blur(show).blur();
      $(this.form).submit(hide)
    }
  });
});