;(function() {
    var css = document.createElement('link');
    css.href = 'dpla/DPLA-Search-Widget/dpla-search-widget.css';
    css.type = 'text/css';
    css.rel = 'stylesheet';

    var headTag = document.getElementsByTagName('head')[0];
    headTag.appendChild(css);

    var widgetImg = document.createElement('img');
    widgetImg.src = 'dpla/DPLA-Search-Widget/dpla-search-widget-logo.png';
    widgetImg.title = 'Search the DPLA!';
    widgetImg.alt = 'Search the DPLA!';

    var form = document.createElement('form');
    form.method = 'get';
    form.action = 'http://dp.la/search';
    form.name = 'dpla_search_widget';

    var widgetInputDiv = document.createElement('div');
    widgetInputDiv.id = 'dpla-form-input';
    
    var search = document.createElement('input');
    search.type = 'text';
    search.placeholder = 'Search the DPLA!';
    search.name = 'q';
          
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Search';

    form.appendChild(widgetImg); 
    form.appendChild(search);
    form.appendChild(submit);

    var search_div = document.getElementById("dpla_search_widget");

    search_div.appendChild(form);
})();