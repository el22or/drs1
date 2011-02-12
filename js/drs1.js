// Initialize.
jQuery(document).ready(function() {
  
  // Scroll slowly
  jQuery.localScroll();
  
  // Countdown.
	var austDay = new Date();
	austDay = new Date(2010, 11 - 1, 6, 20);
  $('#promotion-top #countdown').countdown({
    until: austDay,
    format: 'HMS',
    compact: true, 
    description: ''
  });
  
  // Resize form text elements with default size because it's too large.
  jQuery('form input.form-text').each(function() {
    var $this = jQuery(this);
    var size = $this.attr('size');
    
    // 50 is max
    if (size == '60') {
      $this.attr('size', '50');
    }
  });
  
});
