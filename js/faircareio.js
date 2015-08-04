/**
 * faircareio
 * Created by SaliproPham on 7/30/2015.
 */


/* PARALLAX
 ========================================================*/
(function ($) {
   $(function () {
      //pararel header
      var $wd = $(window), $wr = $('#parallax-bg1'), $bh = ($.browser.webkit) ? $('body') : $('html');
      var tm = $wr.offset() && $wr.offset().top;
      $wd.bind('scroll.site', function () {
         var st = $bh.scrollTop() + $wd.height();
         if (st > (tm + 150)) {
            var top = -(st - tm) / 5;
            top = (top > 0) ? 0 : ((top < -200) ? -200 : top);
            $wr.css({
               'backgroundPosition': 'center ' + top + 'px'
            });
         }
      }).trigger('scroll.site');
   });
})(jQuery);

/* TOTOP
 ========================================================*/
(function ($) {
   $(function () {
      $("#toTop").click(function () {
         $('html, body').animate({scrollTop: 0}, 500);
      });
      $("#toBody").click(function () {
         console.log($('header').offset().top);
         $('html, body').animate({scrollTop: $('.sl-nav').offset().top || 600}, 500);
      });
      setTimeout(function () {
         $('body').addClass('done');
      }, 1500)
   });
})(jQuery);

/* TWEENMAX
 ========================================================*/
(function ($) {
   $(function () {
      if ($('html').hasClass('desktop')) {
         var controller = new ScrollMagic.Controller()
         if($('.home-page').length > 0) {
            // feature
            new ScrollMagic.Scene({triggerElement: "#section2", triggerHook: 'onEnter'})
               .setClassToggle(".feature-item", "fadeInUp animated")
               .addTo(controller).removeIndicators();

            // e1
            new ScrollMagic.Scene({
               triggerElement: "#section4", duration: 500, triggerHook: 'onEnter', offset: 200
            }).setTween(TweenMax.fromTo("#magicItem1", 1,
                  {opacity: 0, scale: 0.5},
                  {opacity: 1, scale: 1})).addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section4", duration: 400, triggerHook: 'onLeave', offset: 200
            }).setTween(TweenMax.fromTo("#magicItem1", 1,
                  {opacity: 1, left: 0},
                  {opacity: 0, left: -300})).addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section4", duration: 500, offset: 0
            }).setTween(TweenMax.fromTo("#magicItem1b", 1,
                  {top: 0},
                  {top: 200})).addTo(controller);
            // e2
            new ScrollMagic.Scene({
               triggerElement: "#section5", duration: 500, triggerHook: 'onEnter', offset: 200
            }).setTween(TweenMax.fromTo("#magicItem2", 1,
                  {opacity: 0, rotation: 180, scale: 0.5},
                  {opacity: 1, rotation: 360, scale: 1}))
               .addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section5", duration: 400, triggerHook: 'onLeave', offset: 200
            }).setTween(TweenMax.fromTo("#magicItem2", 1,
                  {opacity: 1, right: 0},
                  {opacity: 0, right: -300}))
               .addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section5", duration: 500, offset: 0
            }).setTween(TweenMax.fromTo("#magicItem2b", 1,
                  {top: 0},
                  {top: 200})).addTo(controller);
            // e3
            new ScrollMagic.Scene({
               triggerElement: "#section6", duration: 500, triggerHook: 'onEnter', offset: 200
            }).setTween(TweenMax.fromTo("#magicItem3", 1,
                  {opacity: 0, scale: 0.5},
                  {opacity: 1, scale: 1}))
               .addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section6", duration: 400, triggerHook: 'onLeave', offset: 200
            }).setTween(TweenMax.fromTo("#magicItem3", 1,
                  {opacity: 1, left: 0},
                  {opacity: 0, left: -300}))
               .addTo(controller);
            new ScrollMagic.Scene({
               triggerElement: "#section6", duration: 500, offset: 0
            }).setTween(TweenMax.fromTo("#magicItem3b", 1,
                  {top: 0},
                  {top: 200})).addTo(controller);
         }
         //# About page
         if($('.about-page').length > 0) {
            new ScrollMagic.Scene({triggerElement: "#ourTeamBlock", triggerHook: 'onEnter'})
               .setClassToggle(".team-list", "slideInUp animated")
               .addTo(controller).removeIndicators();
            new ScrollMagic.Scene({triggerElement: "#ourGoldBlock", triggerHook: 'onEnter'})
               .setClassToggle("#ourGoldElem", "fadeInDown animated")
               .addTo(controller).removeIndicators();
         }

      }
   });
})(jQuery);

/* TOME
 ========================================================*/
(function ($) {
   $(function () {
      if ($('nav').hasClass('scrollme-ok')) {
         $("#toBody").trigger('click');
      }
   });
})(jQuery);