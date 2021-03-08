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



$('a[href^="#"]').click(function(){ // #1
  let anchor = $(this).attr('href');  // #2
  $('html, body').animate({           // #3
  scrollTop:  $(anchor).offset().top  // #4
  }, 600);                            // #5
  });


  function alertsystem() {
    alert("Love");
  }
  $(function() {
    $('.aside__navbar__menuLink').on('click', function(e) {
        e.preventDefault();
        $('.div-bk').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});


