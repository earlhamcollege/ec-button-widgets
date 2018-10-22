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
        name: 'btn_icon',
        label: 'font awesome class',
        type: 'string',
        required: false
      },
      {
        name: 'btn_size',
        type: 'select',
        required: false,
        label: 'Button Size',
        choices: [
          {
            label: 'Small',
            value: '40px'
          },
          {
            label: 'Medium',
            value: '80px'
          },
          {
            label: 'Large',
            value: '100px'
          }
        ]
      },
      {
        name: 'btn_url',
        label: 'Destination URL',
        require: false,
        type: 'string'
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
      {
        name:'content',
        label:'Content Settings',
        fields: ['btn_title','btn_url']
      },
      {
        name:'style_settings',
        label:'Appearance Settings',
        fields: ['style','btn_icon','btn_size']
      },
    ].concat(options.addFields || [])
  },
  construct: function (self, options) {
    self.pushAsset('stylesheet','ec-button');
  }
};
