An embeddable widget to search the Digital Public Library of America collections.
It's written in pure JavaScript and CSS.  It has no external dependencies on libraries such as JQuery or Twitter Bootstrap.
Nor do you need a DPLA API key.
Simply add the following to your page:

```html
<div id="dpla_search_widget"></div>
```

Then before the closing body tag add:
```html
<script type="text/javascript" src="dpla-search-widget.js"></script>
```

You'll need to adjust the src path to wherever the dpla-search-widget.js script lives on your server.

You'll also need to adjust lines 3 and 11 of dpla-search-widget.js
```javascript
css.href = 'dpla-search-widget.css';
.
.
widgetImg.src = 'dpla-search-widget-logo.png';
```

to reflect where the script lives on your server.

It should look like this:

![alt tag](https://raw.github.com/joshwilsonnc/DPLA-Search-Widget/cssdev/dpla-widget.png)

If there's any interest in the widget a configuration object can be added to make the widget easier to set up.

See search_widget.html for an example setup.