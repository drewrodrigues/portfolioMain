$(function() {
  var $nav = $('nav');
  var $about = $('#about-me');
  var $navLinks = $('nav a');
  var $sections = [];
  var sectionNames = ["#main", "#about-me", "#projects", "#skills", "#contact"];
  var sectionEnds = [];

  // setup sections
  for (var i = 0; i < sectionNames.length; i++) {
    $sections.unshift( $(sectionNames[i]) );
    sectionEnds.push( $(sectionNames[i]).prop('offsetTop') + $(sectionNames[i]).height() );
  }

  console.log(sectionEnds);

  var toggleMenuButton = function() {
    $('#navToggle').on('click', function() {
      $nav.toggle();
    });
  };

  var fixedTopMenuOnScroll = function() {
    $(window).on('scroll', function(e) {
      var topPos = $(this).scrollTop();

      if (topPos > $about.prop('offsetTop')) {
        $nav.addClass('stickyNav');
      } else {
        $nav.removeClass('stickyNav');
      }
    });
  };

  // TODO: find a DRYer solution
  var highlightNavLinksOnScroll = function() {
    // TODO: don't use 2 seperate event listeners for the same event
    $(window).on('scroll', function(e) {
      var topPos = $(this).scrollTop();

      if (topPos < sectionEnds[0]) {
        $navLinks.removeClass('active');
        $navLinks.eq(0).addClass('active');
      } else if (topPos < sectionEnds[1]) {
        $navLinks.removeClass('active');
        $navLinks.eq(1).addClass('active');
      } else if (topPos < sectionEnds[2]) {
        $navLinks.removeClass('active');
        $navLinks.eq(2).addClass('active');
      } else if (topPos < sectionEnds[3]) {
        $navLinks.removeClass('active');
        $navLinks.eq(3).addClass('active');
      } else if (topPos < sectionEnds[4]) {
        $navLinks.removeClass('active');
        $navLinks.eq(4).addClass('active');
      }
    });
  };

  toggleMenuButton();
  fixedTopMenuOnScroll();
  highlightNavLinksOnScroll();

  // TODO: Add scroll effect on navbar link click
  // FIXME: Make sure navbar is always shown, (even after hidden with mobile menu then resized)
});
