apos.define('ec-button-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
    self.play = function($widget, data, options) {
      if (data.btn_margin){
        $widget.css('margin',data.btn_margin);
      }

      // Display Widget Once JS styles have been added
      $widget.find('[data-loading]').fadeIn().attr('data-loading', 'data-loaded');
    };
  }
});
