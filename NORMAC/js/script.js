$(document).ready(function(){
  /* Rotating slides for carousel */
  var interval = window.setInterval(rotateSlides, 3000)
  
  function rotateSlides(){
    
    var $firstSlide = $('#carousel').find('div:first');
    var width = $firstSlide.width();
    
    $firstSlide.animate({marginLeft: -width}, 1000, function(){
      var $lastSlide = $('#carousel').find('div:last')
      $lastSlide.after($firstSlide);
      $firstSlide.css({marginLeft: 0})
    })
  }

$('#left-arrow').click(previousSlide);
$('#right-arrow').click(nextSlide);
$('.slide-image').click(nextSlide);

  function nextSlide(){
  window.clearInterval(interval);
  var $currentSlide = $('#carousel').find('div:first');
  var width = $currentSlide.width();
  $currentSlide.animate({marginLeft: -width}, 1000, function(){
    var $lastSlide = $('#carousel').find('div:last')
    $lastSlide.after($currentSlide);
    $currentSlide.css({marginLeft: 0})
    interval = window.setInterval(rotateSlides, 3000);
  });
}

  function previousSlide(){
    window.clearInterval(interval);
    var $currentSlide = $('#carousel').find('div:first');
    var width = $currentSlide.width();
    var $previousSlide = $('#carousel').find('div:last')
    $previousSlide.css({marginLeft: -width})
    $currentSlide.before($previousSlide);
    $previousSlide.animate({marginLeft: 0}, 1000, function(){
      interval = window.setInterval(rotateSlides, 3000);
  });
}

})
// Toggle for services page
$(".info").hide();

$("#featOne").click(showOne);
$("#featTwo").click(showTwo);
$("#featThree").click(showThree);
$("#featFour").click(showFour);
$("#featFive").click(showFive);


  function showOne(){
    hideInfo();
    $("#session").slideDown();
    $("#session").show();
  }
function showTwo(){
    hideInfo();
    $("#recording").slideDown();
    $("#recording").show();
  }
  function showThree(){
    hideInfo();
    $("#mastering").slideDown();
    $("#mastering").show();
  }
  function showFour(){
    hideInfo();
    $("#documentaries").slideDown();
    $("#documentaries").show();
  }
  function showFive(){
    hideInfo();
    $("#dance").slideDown();
    $("#dance").show();
  }
  function hideInfo(){
    $(".info").hide(1000);
  }
