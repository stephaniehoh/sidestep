$(document).ready(function(){
  initScroll()
  initSnap()
  $('#illusion-nav').hide()
  navShow()
  thunderScroll();
})

function navShow() {
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 540) {
      $('#illusion-nav').fadeIn(700);
      $('nav').hide();
    } else {
      $('#illusion-nav').fadeOut(200);
      $('nav').show();
    }
  });
}

function initScroll(){
  $(function(){
    $.scrollIt({
      easing: 'ease-in'
    });
  })
}

function initSnap(){
  $(document).scrollsnap({
    snaps: 'section',
    proximity: 100,
    easing: 'easeOutQuart'
  });
}

function thunderScroll(){
  $('#illusion-nav img').click(function (){
    $('html, body').animate({
      scrollTop: $('#div1').offset().top
    }, 'slow');
  });
}


