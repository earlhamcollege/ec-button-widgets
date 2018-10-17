module.exports = {
  extend: 'apostrophe-widgets',
  contextual: true,
  label: 'EC Button',
  beforeConstruct: function(self, options) {
    options.addFields = [
      {
        name: 'btn_title',
        label: 'Button Title',
        type: 'string',
        required: true
      },
      {
        name: 'style',
        type: 'select',
        label: 'Button Style',
        required: false,
        choices: [
          {
            label: 'Style 1',
            value: '1'
          },
          {
            label: 'Style 2',
            value: '2'
          }
        ]
      }
    ].concat(options.addFields || [])

    options.arrangeFields = [
    ].concat(options.addFields || [])
  },
  construct: function (self, options) {
    self.pushAsset('stylesheet','ec-button');
  }
};
