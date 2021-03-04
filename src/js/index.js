var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")
var text = document.querySelector(".title")
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
  text.classList.toggle("closeText")
}

ham.addEventListener("click", toggleHamburger)
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
    
  }
)

// var countDownDate = new Date("Mar 8, 2021 19:33:10").getTime();

// var x = setInterval(function() {
//     var now = new Date().getTime();
//     var distance = countDownDate - now;
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     document.getElementById("timer").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("timer").style.display = "none";
//         document.getElementById("main-content").style.display="block"      
//     }
// }, 1000);


$('a[href^="#"]').click(function(){ // #1
  let anchor = $(this).attr('href');  // #2
  $('html, body').animate({           // #3
  scrollTop:  $(anchor).offset().top  // #4
  }, 600);                            // #5
  });


  function alertsystem() {
    alert("With love");
  }



