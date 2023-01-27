jQuery(document).ready(function () {
    let step = 1;
    $("#menu-item").on("click",function (){
       $(".menu").toggle("slow");
    });
    $(".fixed-block").before().on("click",function (){
        if($(".fixed-block").data("open") == "close") {
            $(".fixed-block").css("right", 0);
            $(".fixed-block").data("open","open");
        }else{
            $(".fixed-block").css("right", "-390px");
            $(".fixed-block").data("open","close");
        }
    });
    $("#quiz-open").on("click",function (){
        $(".modal").css("display","flex");
        $(".Quiz").toggle();
        $(".overlay").toggle();
        if($(".Quiz").data("open") == "close") {
            step!=1?step:step=1;
            $(".Quiz").attr("data-open","open");
            $("body").css("overflow","hidden");
        }else{
            $(".Quiz").attr("data-open","close");
            $("body").css("overflow","none");
        }
    })
    $(".quiz-open").on("click",function (){
        $(".modal").toggle("flex");
        $(".Quiz").toggle();
        $(".overlay").toggle();
        if($(".Quiz").data("open") == "close") {
            step!=1?step:step=1;
            $(".Quiz").attr("data-open","open");
            $("body").css("overflow","hidden");
        }else{
            $(".Quiz").attr("data-open","close");
            $("body").css("overflow","none");
        }
    })

    $(".open-modal").on("click",function (){
        $(".modal").css("display","flex");
        $(".modal-form").toggle();
        $(".overlay").toggle();
    })

    $("#modal-2,#modal-3,#modal-4").on("click",function (){
       let name = $(this).attr("id");
       $("."+name).css("display","flex");
       $(".modal").css("display","flex");
    });

    $("#Quiz-cross").on("click",function (){
            $(".Quiz").hide();
            $(".modal").hide();
            $("body").css("overflow","scroll");
            $(".overlay").toggle();
    });
    $(".overlay").on("click",function (){
        if($(this).parent().parent().parent().data("open") == "open"){
            $(".Quiz").hide();
            $(".modal").hide();
            return;
        }
        $(this).parent().parent().hide();
        if($(".Quiz").attr("data-open") == "close") {
            $(".modal").hide();
            $(".overlay").toggle();
        }


    });
    $(".cross").on("click",function (){
        if($(this).parent().parent().parent().data("open") == "open"){
            $(".Quiz").hide();
            $(".modal").hide();
            return;
        }
       $(this).parent().parent().hide();
        if($(".Quiz").attr("data-open") == "close") {
            $(".modal").hide();
            $(".overlay").toggle();
        }


    });

    $(".item-form").on("click",function (){
        let old = $(this).parent().find(".active");
        old.removeClass("active");
        $(this).find(".item-name").addClass("active");
        let img = $(this).find("img").attr("src");
        $(this).parent().parent().find("img.quiz-img").attr("src",img);
    });

    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        adaptiveHeight: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".review-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet" style="left: 10px;top: 50%;position: absolute;z-index: 5;"><img src="./assets/img/arrowcircleright.png" alt=""></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet" style="right: 10px;top: 50%;position: absolute;z-index: 5;"><img src="./assets/img/arrowcircleright.png" alt=""></button>'
    });

    $("#employee").on("click", function (){
        $("#employee").next().removeClass("d-none");
        $("#employee").hide();
    });

    $(".catalog-kitchen .catalog-select").on("click",function (){
       let name = $(this).attr("data-catalog");
       $(".catalog-kitchen .catalog-select.active").removeClass("active");
       $(".catalog-kitchen .catalog-select[data-catalog="+name+"]").addClass("active");
       $(".catalog-kitchen .catalog-active").removeClass("catalog-active");
       $("#"+name).addClass("catalog-active");
    });
    $(" .catalog-select").on("click",function (){
        let name = $(this).attr("data-stage");
        $(".stage .catalog-select.active").removeClass("active");
        $(".stage .catalog-select[data-stage="+name+"]").addClass("active");
        $(".stage .catalog-active").removeClass("catalog-active");
        $("#"+name).addClass("catalog-active");
    });
    $(".stage-4-goals>div").on("click",function (){
        let name = $(this).attr("id");
        $(".stage-4-goals>div.active,.stage-4-item.active").removeClass("active");
       $(this).addClass("active");
        $(".stage-4-item[data-stage="+name+"]").addClass("active");
    });

    $(".type-place").on("click",function (){
        $(".type-place.active ").removeClass("active");
        $(".type-material.d-flex").addClass("d-none");
        $(".type-material.d-flex").removeClass("d-flex");

        $(this).addClass("active");
        let name = $(this).attr("data-material");
        $("#type-material-"+name).removeClass("d-none");
        $("#type-material-"+name).addClass("d-flex");
    });
    $(".type-list").on("click",function (){
       let num = $(this).attr("data-material");
       $(".type-list.green").removeClass("green");
        $(".material-list.d-flex").addClass("d-none");
        $(".material-list.d-flex").removeClass("d-flex");


        $(this).addClass("green");
        $("#material-list-"+num).removeClass("d-none");
        $("#material-list-"+num).addClass("d-flex");
    });

    $(".info-click").on("click",function (){
        let text = $(this).next().html();
        $("#info-input").html();
        $("#info-input").html(text);
        $(".modal").css("display","flex");
        $(".modal-info").css('display', 'flex');
    });
    //Quiz
    $("#quiz-next").on("click",function (){


        $(".modal-info").hide();
        $("#quiz-"+step).hide();
        $("#quiz-"+(step+1)).css('display', 'flex');
        $("#step-name").html($("#quiz-"+(step+1)).find("#quiz-name").text());
        $(".progress-bar").css("--myVar",((step)*8 - 5)+"%");
        $(".progress-bar").find("span").text("Расчет пройден на "+ ((step)*8) +"%");

        if(step == 1){
            $("#quiz-back").show();
            $(".quiz-design-link").show();
        }
        if(step == 6){
            $(".quiz-design-link").hide();
        }
        if(step == 12){
            $("#step-name").hide();
            $("#quiz-next").hide();
            $(".progress-bar").css("--myVar",(100 - 5)+"%");
            $(".progress-bar").find("span").text("Расчет пройден на 100%");
        }

        step++;

    });
    $("#quiz-next-section").on("click",function (){

        step=1
        $(".modal").toggle("flex");
        $(".Quiz").toggle();
        $(".overlay").toggle();
        if($(".Quiz").data("open") == "close") {
            step!=1?step:step=1;
            $(".Quiz").attr("data-open","open");
            $("body").css("overflow","hidden");
        }else{
            $(".Quiz").attr("data-open","close");
            $("body").css("overflow","none");
        }

        $(".modal-info").hide();
        $("#quiz-"+step).hide();
        $("#quiz-"+(step+1)).css('display', 'flex');

        $("#step-name").html($("#quiz-"+(step+1)).find("#quiz-name").text());
        $(".progress-bar").css("--myVar",((step)*8 - 5)+"%");
        $(".progress-bar").find("span").text("Расчет пройден на "+ ((step)*8) +"%");
        step=2;
        if(step == 1){
            $("#quiz-back").show();
            $(".quiz-design-link").show();
        }
        if(step == 6){
            $(".quiz-design-link").hide();
        }
        if(step == 12){
            $("#step-name").hide();
            $("#quiz-next").hide();
            $(".progress-bar").css("--myVar",(100 - 5)+"%");
            $(".progress-bar").find("span").text("Расчет пройден на 100%");
        }


    });

    $("#quiz-back").on("click",function (){

        $(".modal-info").hide();
        $("#step-name").html($("#quiz-"+(step-1)).find("#quiz-name").text());
        $("#quiz-"+step).hide();
        $("#quiz-"+(step-1)).css('display', 'flex');
        $(".progress-bar").css("--myVar",((step-2)*8 - 5)+"%");
        $(".progress-bar").find("span").text("Расчет пройден на "+ ((step-2)*8) +"%");

        if(step == 2){
            $("#quiz-back").hide();
            $(".quiz-design-link").hide();
        }
        if(step == 7){
            $(".quiz-design-link").show();
        }
        if(step == 12){
            $("#step-name").show();
            $("#quiz-next").show();
        }

        step--;

    })


    $(".quiz-design-link").on("click",function (){
       let text = $("#quiz-"+step).find(".info-text").html();
        $("#info-input").html();
        $("#info-input").html(text);
        $(".modal-info").css('display', 'flex');
    });

    $(".tech .control").on("click",function (){
        $(this).parent().find("input[type='radio']:checked").prop('checked', false);
        $(this).find("input[type='radio']").prop('checked', true);
        let DS = $("#DS input[type='radio']:checked").parent().index()+1;
        if(DS != 1){
            $("#MW").hide();
            $("#MW input[type='radio']:checked").prop('checked', false);
            $("#MW:last-child input").prop('checked', true);
        } else{
            $("#MW").show();
        }
        let MW = $("#MW input[type='radio']:checked").parent().index()+1;
        let RF = $("#RF input[type='radio']:checked").parent().index()+1;
        let VT = $("#VT input[type='radio']:checked").parent().index()+1;
        $("#quiz-2-img img").attr("src","./assets/quiz/"+DS+MW+RF+VT+".png");
    });



});





// Перенесенные слайдеры