$(document).ready(function(){
    $(".nav-toggle").click(function(){
        $(".nav-toggle").toggleClass("active")
        $(".fa-times").toggleClass("active")
        $(".nav-overlay").toggleClass("active")
    })
})