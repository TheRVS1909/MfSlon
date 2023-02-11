jQuery(document).ready(function () {
   let step = 1;
   $("#menu-item").on("click",function (){
       $(".menu").toggle("slow");
   });
   $(".menu .examples").on("click",function (){
        $(".menu").toggle("slow");
        $(location).attr('href','index.html#examples');
   });
   $(".menu .sale").on("click",function (){
      $(".menu").toggle("slow");
      $(location).attr('href','index.html#sale');
 });
 $(".menu .installment-plan").on("click",function (){
   $(".menu").toggle("slow");
   $(location).attr('href','index.html#installment-plan');
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
                   $(".modal-3 .draggable").css('height', $(".slide-cont").height() + 440);
               }
               if ($(document).width() < 600 && $(document).width() > 500) {
                   $(".modal-3 .draggable").css('height', $(".slide-cont").height() + 380);
               }
               if ($(document).width() < 500) {
                   $(".modal-3 .draggable").css('height', "680px");
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
      };
      
  });

   $(`#btn-info-1`).on("click", function () {
        let width = $(this).next().attr("data-width");
        let text = $(this).next().html();
      $("#info-input").html();
      $("#info-input").html(text);
      $(".modal").css("display","flex");
      $(".modal-info").css('display', 'flex');
      $(".modal-info").css('max-width', width + "px");
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


   //AJAX
   const url = 'http://mfslon.bitrix24.ru';
   $(".3d-project-online").on("click", function () {
      $.post(url, {
          city: 'Орел',
          project_name: 'MFSlon',
          form_subject: 'Запись в салон',
          Имя: $(this).parent().find("#ModalName").val(),
          Телефон: $(this).parent().find("#ModalTel").val(),
       // date: $(this).parent?.find("#ModalDate")?.val() ,
      })
  });
   $(".book-price-standard").on("click", function () {
      $.post(url, {
         city: 'Орел',
         project_name: 'MFSlon',
         form_subject: 'Забронировать стоимость стандарт',
         Телефон: $(this).parent().find("#ExampleTel").val(),
         Имя: $(this).parent().find("#ExampleName").val(),
      })
   });
   $(".order-measurement-froze").on("click", function () {
      $.post(url, {
          city: 'Орел',
          project_name: 'MFSlon',
          form_subject: 'Заказать замер',
          Телефон: $(this).parent().find("#ExampleTel").val(),
          Имя: $(this).parent().find("#ExampleName").val(),
      })
   });
   $(".advantage-offer-kitchen").on("click", function () {
      $.post(url, {
          city: 'Орел',
          project_name: 'MFSlon',
          form_subject: 'Воспользоваться предложением установки кухни',
          Имя: $(this).parent().find("#DesignName").val(),
          Телефон: $(this).parent().find("#DesignTel").val(),
      })
   });
   $(".get-discount").on("click", function () {
      $.post(url, {
          city: 'Орел',
          project_name: 'MFSlon',
          form_subject: 'Получить cкидку 45%',
          Имя: $(this).parent().find("#DesignName").val(),
          Телефон: $(this).parent().find("#DesignTel").val(),
      })
   });
   $(".get-small-discount").on("click", function () {
      $.post(url, {
          city: 'Орел',
          project_name: 'MFSlon',
          form_subject: 'Получить cкидку 40%',
          Имя: $(this).parent().find("#DesignName").val(),
          Телефон: $(this).parent().find("#DesignTel").val(),
      })
   });
   $(".get-present").on("click", function () {
      $.post(url, {
          city: 'Орел',
          project_name: 'MFSlon',
          form_subject: 'Получить подарок',
          Имя: $(this).parent().find("#DesignName").val(),
          Телефон: $(this).parent().find("#DesignTel").val(),
      })
   });
   $(".advantage-offer-installment").on("click", function () {
      $.post(url, {
          city: 'Орел',
          project_name: 'MFSlon',
          form_subject: 'Воспользоваться предложением рассрочки',
          Имя: $(this).parent().find("#DesignName").val(),
          Телефон: $(this).parent().find("#DesignTel").val(),
      })
   });
   $(".get-cashback").on("click", function () {
      $.post(url, {
          city: 'Орел',
          project_name: 'MFSlon',
          form_subject: 'Получить кэшбэк',
          Имя: $(this).parent().find("#DesignName").val(),
          Телефон: $(this).parent().find("#DesignTel").val(),
      })
   });

 
});