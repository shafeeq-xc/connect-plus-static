jQuery(document).ready(function($){
  function resizeFBPlugin() {
      var container_width = (Number($('.fb-column').width()) - Number($('.fb-column').css('padding-left').replace("px", ""))).toFixed(0);
      // if (container_width > 620) container_width = 520;
      document.getElementById("fbContent").src = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fconnectpluscochin&tabs=timeline&width='+container_width+'&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId';
      document.getElementById("fbContent").width = container_width;
  };
  $(window).on('resize', function() {
    setTimeout(function(){resizeFBPlugin()}, 500);
});

  $(window).on('load', function() {
    setTimeout(function(){resizeFBPlugin()}, 1500);
});
  resizeFBPlugin();
});