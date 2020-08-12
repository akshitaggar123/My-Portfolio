$("#info").addClass("about-animation");
$("#info").css("opacity","1");
$("#side-left").addClass("about-animation");
$("#side-left").css("opacity","1");
$("#side-right").addClass("about-animation");
$("#side-right").css("opacity","1");

$(".work-name").on("click",function(){
    $(".work-name").removeClass("active-button");
    $(this).addClass("active-button")

    var name=$(this).attr("class");
    var work_number=name.split("-")[1];
    $(".work-des").addClass("none-display");
    $(".work-"+work_number).removeClass("none-display");
    $(".work-"+work_number).removeClass("block-display");
    console.log("hello");

})



$(".navbar-color1").on("click",function(){
    var section=$(this).attr("href");
    console.log(section);
    $("html, body").animate({scrollTop:$(section).offset().top},1000 );
    console.log("scrolled");

})
$(".navbar-color").on("click",function(){
    var section=$(this).attr("href");
    console.log(section);
    $("html, body").animate({scrollTop:$(section).offset().top},1000 );
    console.log("scrolled");

})





var prevScrollpos = window.pageYOffset;
$(document).scroll(function(){
    currentScrollPos=window.pageYOffset;
    if(prevScrollpos>currentScrollPos+5){
        $("#navbar").addClass("position-fixed",1000);
        console.log("scrolled up");

    }
    else if(prevScrollpos+5<currentScrollPos){
        $("#navbar").removeClass("position-fixed",1000);
    }
prevScrollpos=currentScrollPos;
})

var about = $('#about').offset().top;
var experience = $('#experience').offset().top;
var projects= $("#projects").offset().top;
var contact=$("#contact").offset().top;
var info=$("#info").offset().top;
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = about-300;
    var scroll_pos_test_experience=experience-300;
    var scroll_pos_test_projects=projects-300;
    var scroll_pos_test_contact=contact-300;
    console.log(y_scroll_pos);

    if(y_scroll_pos> scroll_pos_test) {
    
        $("#about").addClass("about-animation");
        $("#about").css("opacity","1");
    }
    if(y_scroll_pos>scroll_pos_test_contact){
        $("#contact").addClass("contact-animation");
        $("#contact").css("opacity","1");
    }
    if(y_scroll_pos>scroll_pos_test_experience){
        $("#experience").addClass("experience-animation");
        $("#experience").css("opacity","0.8");

    }
    if(y_scroll_pos>scroll_pos_test_projects){
        $("#projects").addClass("projects-animation");
        $("#projects").css("opacity","1");
    }

});
