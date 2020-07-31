$(document).ready(function () {
    $(".nav-toggle").click(function () {
        $(".nav-toggle").toggleClass("active")
        $(".fa-times").toggleClass("active")
        $(".nav-overlay").toggleClass("active")
        $(".nav-menu").toggleClass("visible")
    })
})

function get() {
    if($(window).width() > 960){
        $(".nav-toggle").hide();
        $(".nav-overlay").hide();
    }
    else{
        if(($('#about').offset().top - $(window).scrollTop()) > 0){
            $(".nav-toggle").hide();
            $(".nav-overlay").hide();
        }
        else{
            $(".nav-toggle").show();
            $(".nav-overlay").show();
        }
    }
}

get();
$(window).scroll(get);