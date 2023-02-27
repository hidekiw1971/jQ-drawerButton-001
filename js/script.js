jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // 
  //ドロワーメニュー
  $(".js-drawer").click(function () {
    $(".js-drawer").toggleClass("js-drawer-open");
    $(".js-drawer-menu").toggleClass("js-drawer-menu-open");
  });
  // 
});
