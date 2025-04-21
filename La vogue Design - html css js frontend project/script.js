//HEADER
window.addEventListener("scroll", function(){
    let header = document.getElementById("bar");
    if(window.scrollY>50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
 });

 //NAV BAR
 const navBar = document.getElementById("navbar");
 

 function showMenu(){
    navBar.style.left = "0";
   
 }

 function hideMenu(){
    navBar.style.left = "-500px"

 }






// FASHION PAGE
$(document).ready(()=>{
      $('.slideshow').slick({
          infinite: true, //ภาพต่อกันเรื่อยๆ
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1024, //ถ้าจอเล็กกว่า1024px
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
        
      $('.slideshow').on("afterChange", function(){
            $(".slideshow .slick-prev").html('<i class="fa-solid fa-chevron-left"></i>');
            $(".slideshow .slick-next").html('<i class="fa-solid fa-chevron-right"></i>');
      })

 })



$(document).ready(()=>{
          $('.grid-row-2-pic1').slick(
            
          );
          $(".grid-row-2-pic1 .slick-next").html('<i class="fa-solid fa-chevron-right"></i>');
          $(".grid-row-2-pic1 .slick-prev").html('<i class="fa-solid fa-chevron-left"></i>');
  
 })


//  JEWELRY PAGE
$(document).ready(()=>{
        $('.jewelry-con').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 700, //ถ้าจอเล็กกว่า1024px
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            }
          ]
        });
        $(".jewelry-con .slick-next").html('<i class="fa-solid fa-chevron-right"></i>');
        $(".jewelry-con .slick-prev").html('<i class="fa-solid fa-chevron-left"></i>');
        
 })


$(document).ready(()=>{
        $(' .jewelry-con-2 .slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          fade: true,
          cssEase: 'linear',
        });


        $('.jewelry-con-2 .slider').hover(function(){
          $(this).slick('slickNext');
        });


        $(" .jewelry-con-2 .slider .slick-next").html('<i class="fa-solid fa-chevron-right"></i>');
        $(" .jewelry-con-2 .slider .slick-prev").html('<i class="fa-solid fa-chevron-left"></i>');
        
 })


 //  PERFUME PAGE
$(document).ready(()=>{
      $('.perfume-con').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 700, //ถ้าจอเล็กกว่า1024px
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      });
      $(".perfume-con .slick-next").html('<i class="fa-solid fa-chevron-right"></i>');
      $(".perfume-con .slick-prev").html('<i class="fa-solid fa-chevron-left"></i>');
  
})


// CONTACT PAGE
$(document).ready(()=>{
    $(".location-con").slick
})




 




 