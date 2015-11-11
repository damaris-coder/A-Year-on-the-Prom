$(document).ready(function(){

  var $grid = $('.painting-gallery').isotope({
    itemSelector: '.painting-item',
    masonry: {
      columnWidth: '.painting-item'
    }
  });

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });


// fancybox pop up

  $(".july29popup").fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      afterLoad   : function() {
          this.inner.prepend( '<h3>July 29th</h3>' );
          this.content = '<h4>Estimated Bid: €500</h4>' + this.content.html();
      }
  });

// painting 2

  $(".aug3popup").fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      afterLoad   : function() {
          this.inner.prepend( '<h1>August 3rd</h1>' );
          this.content = '<h1>Estimated Bid: €500</h1>' + this.content.html();
      }
  });

//painting 3

  $(".aug7popup").fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      afterLoad   : function() {
          this.inner.prepend( '<h1>August 7th</h1>' );
          this.content = '<h1>Estimated Bid: €500</h1>' + this.content.html();
      }
  });

//  painting 4

$(".aug31popup").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    afterLoad   : function() {
        this.inner.prepend( '<h1>August 31st</h1>' );
        this.content = '<h1>Estimated Bid: €500</h1>' + this.content.html();
    }
});

// painting 5

$(".sept8popup").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    afterLoad   : function() {
        this.inner.prepend( '<h1>September 8th</h1>' );
        this.content = '<h1>Estimated Bid: €500</h1>' + this.content.html();
    }
});

// painting 6

$(".sept16popup").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    afterLoad   : function() {
        this.inner.prepend( '<h1>September 16th</h1>' );
        this.content = '<h1>Estimated Bid: €500</h1>' + this.content.html();
    }
});

//painting 7

$(".sept27popup").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    afterLoad   : function() {
        this.inner.prepend( '<h1>September 27th</h1>' );
        this.content = '<h1>Estimated Bid: €500</h1>' + this.content.html();
    }
});

// painting 8

$(".oct11popup").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    afterLoad   : function() {
        this.inner.prepend( '<h1>October 11th</h1>' );
        this.content = '<h1>Estimated Bid: €500</h1>' + this.content.html();
    }
});

// painting 9

$(".oct19popup").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    afterLoad   : function() {
        this.inner.prepend( '<h1>October 19th</h1>' );
        this.content = '<h1>Estimated Bid: €500</h1>' + this.content.html();
    }
});

});
