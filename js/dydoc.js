dydoc = function () {

    var CLASS = function (dom) {
        if (typeof dom == 'string')
            this.dom = document.getElementById(dom);
        else
            this.dom = dom;
    };

    CLASS.prototype = {
        
    };

    return CLASS;
}();