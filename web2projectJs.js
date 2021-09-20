$(document).ready(function() {

    $(".dropdown").click(function() {
        $("#slide").slideToggle();
    });

    $(".dropdown1").click(function() {
        $("#slide1").slideToggle();
    });

    $(".dropdown2").click(function() {
        $("#slide2").fadeToggle("slow");
    });
});