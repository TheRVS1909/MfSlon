jQuery(document).ready(function () {
   let step = 1;
   $("#menu-item").on("click",function (){
       $(".menu").toggle("slow");
   });
   $(".main-logo").on("click",function (){
    $(location).attr('href','index.html');
});
   $(".menu .examples").on("click",function (){
        $(".menu").toggle("slow");
        $(location).attr('href','index.html#catalog-kitchen');
   });
   $(".menu .sale").on("click",function (){
      $(".menu").toggle("slow");
      $(location).attr('href','index.html#sale');
 });
 $(".menu .installment-plan").on("click",function (){
   $(".menu").toggle("slow");
   $(location).attr('href','index.html#for-installment-plan');
});
$(".menu .reviews").on("click",function (){
   $(".menu").toggle("slow");
   $(location).attr('href','index.html#reviews');
});
$(".menu .contacts").on("click",function (){
   $(".menu").toggle("slow");
   $(location).attr('href','index.html#contacts');
});

   $("#modal-3").on("click",function (){
      let name = $(this).attr("id");
      $("."+name).css("display","flex");
      $(".modal").css("display","flex");
      $(".overlay").toggle();
       if (name == 'modal-3') {
           if ( $(".modal-3 .draggable").height() == 0) {
               if ($(document).width() > 1440) {
                   $(".modal-3 .draggable").css('height', $(".slide-cont").height() + 40);
               }
               if ($(document).width() > 992 && $(document).width() < 1440) {
                   $(".modal-3 .draggable").css('height', $(".slide-cont").height() + 40 - 0.5*(1500 - $(document).width()));
               }
               if ($(document).width() < 992 && $(document).width() > 768) {
                   $(".modal-3 .draggable").css('height', $(".slide-cont").height() + 240);
               }
               if ($(document).width() < 768 && $(document).width() > 600) {
                   $(".modal-3 .draggable").css('height', $(".slide-cont").height() + 340);
               }
               if ($(document).width() < 600 && $(document).width() > 500) {
                   $(".modal-3 .draggable").css('height', $(".slide-cont").height() + 280);
               }
               if ($(document).width() < 500) {
                   $(".modal-3 .draggable").css('height', "540px");
               }
               $(".slide-cont").removeAttr('style');
           }
           if ($(".action-slider .slick-track").width() == 0) {
               $(".action-slider .slick-track").css("width", "");
           }
       }
   });

   $('.cross').on("click", function (){
      if ($(this).parent().parent().data("info") && $(".Quiz").attr("data-open") == 'open') {
          $(".modal-info").hide();
      }else {
          $(`section.modal`).hide();
          $(this).parent().parent().hide();
          $(".overlay").css('display', 'none');
          $(".overlay-modal-info").css('display', 'none');
      };
      
  });

  $(".overlay-modal-info").on("click", function () {
    $(".modal-info").hide();
    $(".modal").hide();
    $(".overlay-modal-info").css('display', 'none');
    });

   $(`#btn-info-1`).on("click", function () {
        let width = $(this).next().attr("data-width");
        let text = $(this).next().html();
      $("#info-input").html();
      $("#info-input").html(text);
      $(".modal").css("display","flex");
      $(".modal-info").css('display', 'flex');
      $(".modal-info").css('max-width', width + "px");
      $(".overlay-modal-info").toggle();
   });

   $(".open-modal-design").on("click",function (){
      $(".modal").css("display","flex");
      $(".modal-design").toggle();
      $(".overlay").toggle();
   })

   $(document).ready(() => {
      $(".action-slider").slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         adaptiveHeight: true,
         autoplay: true,
         autoplaySpeed: 4000,
         prevArrow: '<button id="prev" type="button" class="btn btn-juliet" style="left: -10px;top: 50%;position: absolute;z-index: 5;"><img src="./assets/img/arrowcircleleft.png" alt=""></button>',
         nextArrow: '<button id="next" type="button" class="btn btn-juliet" style="right: -10px;top: 50%;position: absolute;z-index: 5;"><img src="./assets/img/arrowcircleright.png" alt=""></button>'
      });
   });

   $("form .mf-button").addClass("button-desable");
    $("form input").on("keyup",function (){
        if (
            ($(this).parent().find(".name-input") ? $(this).parent().find(".name-input").val() : true)  !== '' 
            && 
            $(this).parent().find(".tel-input").val().length  == 17
            ) {
                $(this).parent().find('.mf-button').removeClass('button-desable');
            }else {
                $(this).parent().find('.mf-button').addClass('button-desable')
            }
    });


   //AJAX
   const url = 'http://mfslon.bitrix24.ru';
   $(".3d-project-online").on("click", function () {
    if ($(this).parent().find('.button-desable').length !== 0) {
        return
    }
      $.post(url, {
          city: '????????',
          project_name: 'MFSlon',
          form_subject: '???????????? ?? ??????????',
          ??????: $(this).parent().find("#ModalName").val(),
          ??????????????: $(this).parent().find("#ModalTel").val(),
       // date: $(this).parent?.find("#ModalDate")?.val() ,
      })
  });

   $(".book-price-standard").on("click", function () {
        if ($(this).parent().find('.button-desable').length !== 0) {
            return
        }
      $.post(url, {
         city: '????????',
         project_name: 'MFSlon',
         form_subject: '?????????????????????????? ?????????????????? ????????????????',
         ??????????????: $(this).parent().find("#ExampleTel").val(),
         ??????: $(this).parent().find("#ExampleName").val(),
      })
   });

   $(".order-measurement-froze").on("click", function () {
        if ($(this).parent().find('.button-desable').length !== 0) {
            return
        }
      $.post(url, {
          city: '????????',
          project_name: 'MFSlon',
          form_subject: '???????????????? ??????????',
          ??????????????: $(this).parent().find("#ExampleTel").val(),
          ??????: $(this).parent().find("#ExampleName").val(),
      })
   });

   $(".advantage-offer-kitchen").on("click", function () {
        if ($(this).parent().find('.button-desable').length !== 0) {
            return
        }
      $.post(url, {
          city: '????????',
          project_name: 'MFSlon',
          form_subject: '?????????????????????????????? ???????????????????????? ?????????????????? ??????????',
          ??????: $(this).parent().find("#DesignName").val(),
          ??????????????: $(this).parent().find("#DesignTel").val(),
      })
   });

   $(".get-discount").on("click", function () {
        if ($(this).parent().find('.button-desable').length !== 0) {
            return
        }
      $.post(url, {
          city: '????????',
          project_name: 'MFSlon',
          form_subject: '???????????????? c?????????? 45%',
          ??????: $(this).parent().find("#DesignName").val(),
          ??????????????: $(this).parent().find("#DesignTel").val(),
      })
   });

   $(".get-small-discount").on("click", function () {
        if ($(this).parent().find('.button-desable').length !== 0) {
            return
        }
      $.post(url, {
          city: '????????',
          project_name: 'MFSlon',
          form_subject: '???????????????? c?????????? 40%',
          ??????: $(this).parent().find("#DesignName").val(),
          ??????????????: $(this).parent().find("#DesignTel").val(),
      })
   });

   $(".get-present").on("click", function () {
        if ($(this).parent().find('.button-desable').length !== 0) {
            return
        }
      $.post(url, {
          city: '????????',
          project_name: 'MFSlon',
          form_subject: '???????????????? ??????????????',
          ??????: $(this).parent().find("#DesignName").val(),
          ??????????????: $(this).parent().find("#DesignTel").val(),
      })
   });

   $(".advantage-offer-installment").on("click", function () {
        if ($(this).parent().find('.button-desable').length !== 0) {
            return
        }
      $.post(url, {
          city: '????????',
          project_name: 'MFSlon',
          form_subject: '?????????????????????????????? ???????????????????????? ??????????????????',
          ??????: $(this).parent().find("#DesignName").val(),
          ??????????????: $(this).parent().find("#DesignTel").val(),
      })
   });

   $(".get-cashback").on("click", function () {
        if ($(this).parent().find('.button-desable').length !== 0) {
            return
        }
      $.post(url, {
          city: '????????',
          project_name: 'MFSlon',
          form_subject: '???????????????? ????????????',
          ??????: $(this).parent().find("#DesignName").val(),
          ??????????????: $(this).parent().find("#DesignTel").val(),
      })
   });

   $(".input-number").on("keyup",function (e){
        // check input using regex
        var regex = RegExp(/^\d+$/);
        const test_result = regex.test(e.target.value);

        if(test_result || e.target.value.length == 0){
            e.target.defaultValue = e.target.value;
        }else{
            e.target.value = e.target.defaultValue;
        }
    });

    $(".name-input").on("keyup",function (e){
        // check input using regex
        var regex = RegExp(/^[??-????-??]+$/);
        const test_result = regex.test(e.target.value);

        if(test_result || e.target.value.length == 0){
            e.target.defaultValue = e.target.value;
        }else{
            e.target.value = e.target.defaultValue;
        }
    });

   $(function () {
    $('[data-phone-pattern]').on('input blur focus', (e) => {
        var el = e.target,
            clearVal = $(el).data('phoneClear'),
            pattern = $(el).data('phonePattern'),
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = $(el).val().replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                $(el).val('');
                return;
            }
        }
        if (def.length >= val.length) val = def;
        $(el).val(matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        }));
    });
});
});