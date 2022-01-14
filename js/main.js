$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $("navbar").addClass("sticky")
        }
    })
    $(".menu-btn").click(function () {
        $(".link .menu").toggleClass("active")
        $(".menu-btn i").toggleClass("active")
    })
    // $(".showIcon").click(function() {
    //   $(".contactForm").toggleClass("active")
      
      
    // })
    $(".showIcon").click(function () {
      $(".contactForm").toggleClass("active")
      $(".icon").toggleClass("active")
  });
    
    $("#contact").click(function () {
    $(".contact").toggleClass("active")
    $(".contactForm").toggleClass("active")
   })


})