var main = function () {
  $('div.thencome').click(function(){
    window.scrollTo(0, 300);
  });
  $('div.itstarts').click(function(){
    window.scrollTo(0, 1800);
  });
  $('div.top').click(function(){
    window.scrollTo(0, 0);
  });
};

$(document).ready(main);