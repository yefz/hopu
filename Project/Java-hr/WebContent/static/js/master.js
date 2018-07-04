(function($){

  $("#nav > ul > li > a").click(function(){
    $(this).siblings("ul").slideToggle("fast");
  });

  function reinitIframe() {
        var iframe = $("#frame");
        try {
            var bHeight = iframe.contentWindow.document.body.scrollHeight;
            var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
            var height = Math.max(bHeight, dHeight);
            iframe.height = height;
        } catch (ex) {}
    }
    window.setInterval("reinitIframe()", 200);

})(jQuery);