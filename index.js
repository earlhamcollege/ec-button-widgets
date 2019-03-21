module.exports = {
  extend: 'apostrophe-widgets',
  contextual: true,
  label: 'EC Button',
  beforeConstruct: function(self, options) {
    options.addFields = [
      {
        name: 'btn_title',
        label: 'Button Title',
        type: 'string'
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
            value: '1'
          },
          {
            label: 'Medium',
            value: '2'
          },
          {
            label: 'Large',
            value: '3'
          }
        ]
      },
      {
        name: 'btn_url',
        label: 'Destination URL or page slug',
        require: false,
        type: 'string'
      },
      {
        type: 'attachment',
        name: 'btn_image',
        label: 'Button Image',
      },
      {
        name: 'btn_font_size',
        type: 'range',
        label: 'Select Text Size',
        min: 1,
        max: 3,
        step: .25,
        def: 1
      },
      {
        type: 'boolean',
        name: 'capitalize',
        label: 'Uppercase?',
      },
      {
        type: 'select',
        name: 'icon_or_image',
        label: 'Icon or Image?',
        choices: [
          {
            label: 'Icon',
            value: 'icon'
          },
          {
            label: 'Image',
            value: 'image'
          }
        ]
      },
      {
        name: 'img_size',
        type: 'range',
        label: 'Select Image Size',
        min: 20,
        max: 200,
        step: 10,
        def: 60
      },
      {
        name: 'border_radius',
        type: 'range',
        label: 'Border Radius',
        min: 0,
        max: 10,
        step: 5,
        def: 0
      },
      {
        name: 'btn_color',
        type: 'select',
        label: 'Button Color',
        required: false,
        choices: [
          {
            label: 'Maroon',
            value: '1'
          },
          {
            label: 'Red',
            value: '2'
          },
          {
            label: 'Yellow',
            value: '3'
          },
          {
            label: 'Blue',
            value: '4'
          },
          {
            label: 'Grey',
            value: '5'
          }
        ]
      },
      {
        name: 'btn_margin',
        type: 'string',
        label: 'Button Margin',
        help: 'the first pixel value is top and bottom margins, the second is left and right',
        def: '5px 0px'
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
        fields: ['btn_color', 'btn_size', 'btn_font_size', 'btn_margin',
        'capitalize', 'border_radius']
      },
      {
        name:'icon_settings',
        label:'Icon/Image Settings',
        fields: ['icon_or_image', 'btn_icon', 'btn_image', 'img_size']
      },
    ].concat(options.addFields || [])
  },
  construct: function (self, options) {
    self.pushAsset('stylesheet','always');
    self.pushAsset('stylesheet','variables');
    self.pushAsset('stylesheet','custom');
  }
};
