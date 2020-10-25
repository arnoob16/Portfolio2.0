$(document).ready(function () {
    $(".nav-toggle").click(function () {
        $(".nav-toggle").toggleClass("active")
        $(".fa-times").toggleClass("active")
        $(".nav-overlay").toggleClass("active")
        $(".nav-menu").toggleClass("visible")
    })
})

$(document).ready(function(){
    $(".navItem").click(function(){
        $(".nav-toggle").toggleClass("active")
        $(".fa-times").toggleClass("active")
        $(".nav-overlay").toggleClass("active")
        $(".nav-menu").toggleClass("visible")
    })
})

$(document).ready(function(){
    setTimeout(() => {
        $("#preloader").hide()
    }, 1000);;
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

function changeGallery(galleryID){
    let tabID = galleryID.toUpperCase();
    let prevTab = document.querySelector('.selected');
    prevTab.classList.remove('selected');
    document.getElementById(tabID).classList.add('selected');
    let prevGallery = prevTab.getAttribute('id').toLowerCase() + 'Class';
    document.getElementById(prevGallery).style.display = 'none';
    galleryID = galleryID + 'Class';
    document.getElementById(galleryID).style.display = 'block';
}