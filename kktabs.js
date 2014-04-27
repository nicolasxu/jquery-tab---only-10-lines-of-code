$(document).ready(function() {
  $('.tab-head li a').click(function(e) {
  	// for the tab head
    e.preventDefault();
    $(this).closest('ul').find('a').removeClass('active');
    $(this).addClass('active');
    // now for content
    $(this).closest('.tab-area').find('.tab-content div').hide();
    var id = $(this).attr('href');
    $(id).show();
  });
  $('.tab-head li a:first').trigger('click');
}); // end of ready()