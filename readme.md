An embeddable widget to search the Digital Public Library of America collections.
It's written in pure JavaScript and CSS.  It has no external dependencies on libraries such as JQuery or Twitter Bootstrap.
Nor do you need a DPLA API key.
Simply add the following to your page:

```html
<div id="dpla_search_widget"></div>
```

Then before the closing body tag or in the head tag add:
```html
<script type="text/javascript" src="dpla-search-widget.js"></script>
```

You'll need to adjust the src path to wherever the dpla-search-widget.js script lives on your server.

You'll also need to adjust the paths of the css and DPLA image in dpla-search-widget.js.  Enter the paths in the
configuration object, DPLAWidgetConfig in line one of dpla-search-widget.js.

```javascript
var DPLAWidgetConfig = {
            css_href: 'path/to/dpla-search-widget.css',
            dpla_logo: 'path/to/dpla-search-widget-logo.png'
};
```

to reflect where the script lives on your server.

There is also a minified version of the JavaScript file that you can use.

It should look like this:

![alt tag](https://raw.github.com/joshwilsonnc/DPLA-Search-Widget/cssdev/dpla-widget.png)



See search_widget.html for an example setup.

Using Wordpress?  Try the dpla search widget plugin for Wordpress:  [This link](https://github.com/lfarrell/Wordpress-DPLA-Search-Widget-Plugin)