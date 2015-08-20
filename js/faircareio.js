/**
 * faircareio
 * Created by SaliproPham on 7/30/2015.
 */


/* PARALLAX
 ========================================================*/
(function ($) {
   
})(jQuery);

/* TOTOP
 ========================================================*/
(function ($) {
   $(function () {
      $("#toTop").click(function () {
         $('html, body').animate({scrollTop: 0}, 500);
      });
      $("#toBody").click(function () {
         $('html, body').animate({scrollTop: $('.sl-nav').offset().top || 600}, 500);
      });
      setTimeout(function () {
         $('body').addClass('done');
      }, 1500)
   });
})(jQuery);

/* FULLHEIGHT
 ========================================================*/
(function ($) {
   $(function () {
      //# full-height
      fullheight();
   });
   $(window).resize(function(){
      fullheight();
   })

   var fullheight = function(){
      var wh = $(window).height()
      if(wh > 610){
         $('.magicscroll').css('height',wh)

      }
   }
})(jQuery);

/* TWEENMAX
 ========================================================*/
(function ($) {
   $(function () {
      if ($('html').hasClass('desktop')) {
         //# effect for scroll
         var controller = new ScrollMagic.Controller()
         if($('.home-page').length > 0) {
            // feature
            new ScrollMagic.Scene({triggerElement: "#section2", triggerHook: 'onEnter'})
               .setClassToggle(".feature-item", "fadeInUp animated")
               .addTo(controller);

            // e1
            new ScrollMagic.Scene({
               triggerElement: "#section4", duration: 500, triggerHook: 'onEnter', offset: 100
            }).setTween(TweenMax.fromTo("#magicItem1", 1,
                  {opacity: 0, scale: 0.5},
                  {opacity: 1, scale: 1})).setClassToggle("#magicItem1", "magic-figure2")
               .addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section4", duration: 400, triggerHook: 'onLeave', offset: 0
            }).setTween(TweenMax.fromTo("#magicItem1", 1,
                  {opacity: 1},
                  {opacity: 0, left: -300})).addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section4", duration: 500, offset: 0
            }).setTween(TweenMax.fromTo("#magicItem1b", 1,
                  {top: 0},
                  {top: 0})).addTo(controller);
            // e2
            new ScrollMagic.Scene({
               triggerElement: "#section5", duration: 500, triggerHook: 'onEnter', offset: 100
            }).setTween(TweenMax.fromTo("#magicItem2", 1,
                  {opacity: 0, scale: 0.5},
                  {opacity: 1, scale: 1})).addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section5", duration: 400, triggerHook: 'onLeave', offset: 0
            }).setTween(TweenMax.fromTo("#magicItem2", 1,
                  {opacity: 1, right: 0},
                  {opacity: 0, right: -300}))
               .addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section5", duration: 500, offset: 0
            }).setTween(TweenMax.fromTo("#magicItem2b", 1,
                  {top: 0},
                  {top: 0})).addTo(controller);
            // e3
            new ScrollMagic.Scene({
               triggerElement: "#section6", duration: 500, triggerHook: 'onEnter', offset: 100
            }).setTween(TweenMax.fromTo("#magicItem3", 1,
                  {opacity: 0, scale: 0.5},
                  {opacity: 1, scale: 1}))
               .addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section6", duration: 400, triggerHook: 'onLeave', offset: 0
            }).setTween(TweenMax.fromTo("#magicItem3", 1,
                  {opacity: 1, left: 0},
                  {opacity: 0, left: -300}))
               .addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section6", duration: 500, offset: 0
            }).setTween(TweenMax.fromTo("#magicItem3b", 1,
                  {top: 0},
                  {top: 0})).addTo(controller);
         }
         //# About page
         if($('.about-page').length > 0) {
            new ScrollMagic.Scene({triggerElement: "#ourTeamBlock", triggerHook: 'onEnter'})
               .setClassToggle(".team-list", "fadeIn animated")
               .addTo(controller);
         }

      }
   });

})(jQuery);

/* ABout page
 ========================================================*/
(function ($) {
   $(function () {
      if ($('nav').hasClass('scrollme-ok')) {
         $("#toBody").trigger('click');
      }
   });
})(jQuery);

/* FEATURE SCROLL
 ========================================================*/
(function ($) {
   $(function () {
      //#feature scroll
      $('.feature-item').on('click', function(e){
         e.preventDefault();
         $('html, body').animate({scrollTop: $($(this).data('scrollto')).offset().top}, 500);
         e.stopPropagation();
      });

   });
})(jQuery)