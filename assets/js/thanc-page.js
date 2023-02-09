jQuery(document).ready(function () {
    let step = 1;
    $("#menu-item").on("click",function (){
       $(".menu").toggle("slow");
    });
    $(".menu li").on("click",function (){
        $(".menu").toggle("slow");
        $(location).attr('href','index.html');
     });
});