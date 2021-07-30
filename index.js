window.onscroll = function() {myFunction(), myFunction2()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(".image").on("click", function() { if ($(this).attr('id') == '1') { 
    document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e))
    $("#description").append('<p class = "new_image_text">Test</p>')} else {
    if ($(this).attr('id') == '2') {
        document.querySelectorAll(".new_image_text").forEach(e => e.parentNode.removeChild(e)); 
        $("#description").append('<p class = "new_image_text">Karim Benzema and Marcelo show off the 2020/21 Real Madrid Home Kit</p>')}
}} )