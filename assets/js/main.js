/*
* Author: Trinity Mirror / Cedric Tientcheu
* Date: 20/03/2017
 */
(function ($) {
    "use strict";

    // Declaring variables
    var $header = $("header"),
      $anchorLinks = $header.find("a[href^=\"#\"]"),
      target, $target,
      $bodyContent = $('html, body'),
      animationSpeed = 900,
      $navList = $header.find("li"),
      $friendContainer = $bodyContent.find(".friends-section"),
      $societyContainer = $bodyContent.find(".society-section"),
      $weDoContainer = $bodyContent.find(".what-we-do"),
      $individualContainer = $bodyContent.find(".individuals-section"),
      $weAreContainer = $bodyContent.find(".who-we-are"),
      $maintainIcons = $weDoContainer.find("#maintain"),
      $protectIcons = $weDoContainer.find("#protect"),
      $enhanceIcons = $weDoContainer.find("#enhance"),
      $footerContainer = $("footer");

    var displayContent = {

      "familyPosition" : $friendContainer.offsetTop,
      "soceityPosition" : $societyContainer.offsetTop,
      "individualPosition" : $individualContainer.offsetTop,
      "weArePosition" : $weAreContainer.offset().top,
      "weDoPosition" : $weDoContainer.offset().top,
      "maintainPosition" : $weDoContainer.find(".maintain").offset().top,
      smoothNavigationScroll : function(e) {
        e.preventDefault();
        //$(document).off("scroll");

        target = this.hash;
        var $target = $(target);
        $navList.removeClass("active");
        $(this).parent("li").addClass("active");
        $bodyContent.stop().animate({
             'scrollTop':  $target.offset().top+2 //no need of parseInt here
         }, animationSpeed, 'swing', function() {
           window.location.hash = target;

         });


      },
      onScroll : function() {
        $(window).on("scroll", function() {
          var scrollPos = $(window).scrollTop();
          var target = this.hash;
          var $target = $(target);
          var targetPos = $target.offset().top;
          if ( targetPos <= scrollPos ) {
            $navList.addClass("active");
          } else {
            $navList.removeClass("active");
          }
        });

      },
      parallaxEffect : function() {
        function individuals() {
          $("#individuals").parallax({
            calibrateX: false,
            calibrateY: true,
            invertX: false,
            invertY: true,
            limitX: false,
            limitY: 60,
            scalarX: 2,
            scalarY: 8,
            frictionX: 0.2,
            frictionY: 0.8,
            originX: 0.0,
            originY: 1.0
          });
        }

        function family() {
          $("#family-para").parallax({
            calibrateX: false,
            calibrateY: true,
            invertX: false,
            invertY: true,
            limitX: false,
            limitY: 10,
            scalarX: 2,
            scalarY: 8,
            frictionX: 0.2,
            frictionY: 0.8,
            originX: 0.0,
            originY: 1.0
          });
        }

        function society() {
          $("#society").parallax({
            calibrateX: false,
            calibrateY: true,
            invertX: false,
            invertY: true,
            limitX: false,
            limitY: 10,
            scalarX: 2,
            scalarY: 8,
            frictionX: 0.2,
            frictionY: 0.8,
            originX: 0.0,
            originY: 1.0
          });
        }

        function bilboard() {
          $("#bilboard-scene").parallax({
            calibrateX: false,
            calibrateY: true,
            invertX: false,
            invertY: true,
            limitX: false,
            limitY: 10,
            scalarX: 2,
            scalarY: 8,
            frictionX: 0.2,
            frictionY: 0.8,
            originX: 0.0,
            originY: 1.0
          });
        }

        society();
        family();
        individuals();
        bilboard();

      }

    }

    //displayContent.scrollAnimation();
    //displayContent.onScroll();

    displayContent.parallaxEffect();

    $anchorLinks.on("click", displayContent.smoothNavigationScroll);

      /**** What We Do ****/
    $('.what-we-do').waypoint(function(direction){
     if (direction === 'down') {
        $maintainIcons.addClass('rotate-clockwise');
        $("img.protect").addClass('rotate-clockwise');
        $(".fourth").removeClass("active");
        $(".first").removeClass("active");
        $(".second").removeClass("active");
        $(".third").removeClass("active");
        $(".fifth").removeClass("active");
        $(".sixth").addClass("active");
        $(".seven").removeClass("active");
      } else if (direction === 'up') {
        $(".fourth").removeClass("active");
        $(".first").removeClass("active");
        $(".second").removeClass("active");
        $(".third").removeClass("active");
        $(".fifth").addClass("active");
        $(".sixth").removeClass("active");
        $(".seven").removeClass("active");
      }

    }, {
     offset: '70%'
    });

    /**** Who We are ****/
    $('.who-we-are').waypoint(function(direction){
     if (direction === 'down') {
       $weAreContainer.find(".content-info").css({
         "transform" : "scale(1)",
         "-webkit-transform" : "scale(1)"
       });
         $(".fourth").removeClass("active");
         $(".first").removeClass("active");
         $(".second").removeClass("active");
         $(".third").removeClass("active");
         $(".fifth").addClass("active");
         $(".sixth").removeClass("active");
         $(".seven").removeClass("active");
       } else if (direction === 'up') {
         $(".fourth").removeClass("active");
         $(".first").removeClass("active");
         $(".second").removeClass("active");
         $(".third").addClass("active");
         $(".fifth").removeClass("active");
         $(".sixth").removeClass("active");
         $(".seven").removeClass("active");
       }
    }, {
     offset: '55%'
    });

    /**** Society ****/
    $('.society-section').waypoint(function(direction){
     if (direction === 'down') {
       $societyContainer.find(".content").css({
         "transform" : "translateX(0)"
       });
       $(".fourth").addClass("active");
       $(".first").removeClass("active");
       $(".second").removeClass("active");
       $(".third").removeClass("active");
       $(".fifth").removeClass("active");
       $(".sixth").removeClass("active");
       $(".seven").removeClass("active");
     } else {
       $societyContainer.find(".content").css({
         "transform" : "translateX(-100%)"
       });
       if(direction === 'down') {
         $(".fourth").removeClass("active");
         $(".first").removeClass("active");
         $(".second").removeClass("active");
         $(".third").addClass("active");
         $(".fifth").removeClass("active");
         $(".sixth").removeClass("active");
         $(".seven").removeClass("active");
       }
     }

    }, {
     offset: '52%'
    });

    /**** Family Section ****/
    $('.society-section').waypoint(function(direction){
     if (direction === 'down') {
       $friendContainer.find(".content").css({
         "transform" : "translateX(0)"
       });
       $(".fourth").removeClass("active");
       $(".first").removeClass("active");
       $(".second").removeClass("active");
       $(".third").addClass("active");
       $(".fifth").removeClass("active");
       $(".sixth").removeClass("active");
       $(".seven").removeClass("active");

     } else {
       $friendContainer.find(".content").css({
         "transform" : "translateX(100%)"
       });
     }

    }, {
     offset: '70%'
    });

    /**** Individuals Section ****/
    $('.individuals-section').waypoint(function(direction){
     if (direction === 'down') {
       $individualContainer.find(".content").css({
         "transform" : "translateX(0)",
         "-webkit-transform" : "translateX(0)",
         "-moz-transform" : "translateX(0)"
       });
       $(".fourth").removeClass("active");
       $(".first").removeClass("active");
       $(".second").addClass("active");
       $(".third").removeClass("active");
       $(".fifth").removeClass("active");
       $(".sixth").removeClass("active");
       $(".seven").removeClass("active");

     } else {
       $individualContainer.find(".content").css({
         "transform" : "translateX(-100%)",
         "-webkit-transform" : "translateX(-100%)",
         "-moz-transform" : "translateX(-100%)"
       });
     }
    }, {
     offset: '50%'
    });

    /**** Footer Section ****/
    $('#footer').waypoint(function(direction){
     if (direction === 'down') {
       $footerContainer.find(".content-info").css({
         "transform" : "scale(1)",
         "-webkit-transform" : "scale(1)",
         "-moz-transform" : "scale(1)"
       });
       $(".fourth").removeClass("active");
       $(".first").removeClass("active");
       $(".second").removeClass("active");
       $(".third").removeClass("active");
       $(".fifth").removeClass("active");
       $(".sixth").removeClass("active");
       $(".seven").addClass("active");
     }

    }, {
     offset: '80%'
    });


    //onScroll();

})(jQuery);
