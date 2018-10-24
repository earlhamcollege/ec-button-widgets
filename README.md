## BUTTON WIDGET
An [Apostrophe CMS](http://apostrophecms.org/) module to provide a customizable
button for content. Allows for three configurable, preset styles, as well as
size customization and optional image icon upload. Also supports font-awesome
class styles.



### GETTING STARTED
#### Prerequisites
In order to use this module, you should have:
- NPM
- ApostropheCMS
#### Installing
From within your apostrophe project directory, run
 `npm install --save ec-button-widgets`

Include widget in projects' app.js file:

```
  modules: {
    'ec-button-widgets': {},
    // ... other modules
}
```

### Configuration
#### Colors
In css/variables.less, colors are assigned to variable names like this:
```
@button-color-1: #861f41;
@button-color-2: #6dc6e8;
```
These hex values can be edited without impacting the functionality. These values
are used to configure the background and content colors of the quote.


### License
This project is licensed under the MIT License - see the LICENSE.md file for details.
