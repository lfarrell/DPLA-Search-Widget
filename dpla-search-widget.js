;(function() {
    var css = document.createElement('link');
    css.href = 'dpla-search-widget.css';
    css.type = 'text/css';
    css.rel = 'stylesheet';

    var head_tag = document.getElementsByTagName('head')[0];
    head_tag.appendChild(css);

    var para = document.createElement('h5');
    var para_text = document.createTextNode('Search the DPLA!');

    para.appendChild(para_text);

    var form = document.createElement('form');
    form.method = 'get';
    form.action = 'http://dp.la/search';
    form.name = 'dpla_search_widget';

    var search = document.createElement('input');
    search.type = 'text';
    search.placeholder = 'Search the DPLA!';
    search.name = 'q';

    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Search';

    form.appendChild(search);
    form.appendChild(submit);

    var search_div = document.getElementById("dpla_search_widget");

    search_div.appendChild(para);
    search_div.appendChild(form);
})();