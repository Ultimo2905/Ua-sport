/**
  1. Add behaviour when user clicks on the button we hide/show button.
  2. When user clicks outside the dropdown or button - close the dropdown. 
  3. When user clicks inside the dropdown - nothing happend.
  4. Copy-paste the dropddown and check if your logic work for both dropdowns.
*/

document.addEventListener('click', (event) => {
  const target = event.target;
  
  if (target.matches('.dd-button')) {
    target.nextElementSibling.classList.toggle('visible'); 
  }
  
  const clickableDropdown = target.closest('.dropdown');
  
  [...document.querySelectorAll('.dropdown')].forEach((currentDropdown) => {
    if (currentDropdown !== clickableDropdown) {
      currentDropdown.querySelector('.dd-menu').classList.remove('visible');
    }
  });
   if(event.target.closest('.dd-menu')){
  console.log(event.target.innerText); 
   };
});


// .slider-news-score 

var running = false;
jQuery(".raquo").hover(function(){
  if(running == false) {
    var elWidth = parseInt(jQuery(".slidertwo").css( "width" ), 0);
    var elPos = parseInt(jQuery(".slidertwo").css( "left" ), 0);
    var time = ( elWidth + elPos ) * 4;
    jQuery(".slidertwo").animate({left: "-50%"}, time, "swing");
    running = true;
  }
});
jQuery(".laquo").hover(function(){
  if(running == false) {
    var elPos = parseInt(jQuery(".slidertwo").css( "left" ), 0);
    var time = Math.abs( elPos ) * 4;
    jQuery(".slidertwo").animate({left: "0%"}, time, "swing");
    running = true;
  }
});
jQuery("button").mouseleave(function(){
  jQuery(".slidertwo").stop(true, false);
  running = false;
});


/*slider-articl*/

//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
  
  
  /*****************
   BUILD THE SLIDER
  *****************/
  //set width to be 'x' times the number of slides
  $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
  
    //next slide  
  $('#next').click(function(){
    slideRight();
  });
  
  //previous slide
  $('#previous').click(function(){
    slideLeft();
  });
  
  
  
  /*************************
   //*> OPTIONAL SETTINGS
  ************************/
  //automatic slider
  var autoSlider = setInterval(slideRight, 4000);
  
  //for each slide 
  $.each($('#slider-wrap ul li'), function() { 
     //set its color
     var c = $(this).attr("data-color");
     $(this).css("background",c);
     
     //create a pagination
     var li = document.createElement('li');
     $('#pagination-wrap ul').append(li);    
  });
  
  //counter
  countSlides();
  
  //pagination
  pagination();
  
  //hide/show controls/btns when hover
  //pause automatic slide when hover
  $('#slider-wrap').hover(
    function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
    function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 4000); }
  );
  
  

});//DOCUMENT READY
  


/***********
 SLIDE LEFT
************/
function slideLeft(){
  pos--;
  if(pos==-1){ pos = totalSlides-1; }
  $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));  
  
  //*> optional
  countSlides();
  pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
  pos++;
  if(pos==totalSlides){ pos = 0; }
  $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
  
  //*> optional 
  countSlides();
  pagination();
}



  
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
  $('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
  $('#pagination-wrap ul li').removeClass('active');
  $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
    
  