$(document).ready(function() {
  /** FOR THE STICKY NAVIGATION */
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "120px"
    }
  );

  /**** FOR THE BUTTONS */

  $(".js--scroll-to-plans").click(function() {
    $("html,body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });
  $(".js--scroll-to-feature").click(function() {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* ANimation on scroll */
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "120px"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "120px"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "120px"
    }
  );

  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "120px"
    }
  );

  /* Mobile Nav */
  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);
    console.log("DDE");
    if (icon.hasClass("fas fa-bars")) {
      console.log("DDE1");
      icon.removeClass("fas fa-bars");
      icon.addClass("fas fa-times");
    } else {
      console.log("DDE2");
      icon.removeClass("fas fa-times");
      icon.addClass("fas fa-bars");
    }
  });

  /* IMage popup and zoom*/
  $(gallery.construct("model_group"));
});
