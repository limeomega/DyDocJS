dydoc = function () {

    var info, // document infomation
        pages; // pages

    var currentPage = 0,
        isLoaded = false;

    var parse = function(template){
        pages = template.pages;
    }

    var invalidate = function(){
        requestAnimationFrame(function(){

        }.bind(this));
    }

    var CLASS = function (dom) {
        this.dom = document.getElementById(dom);
    };

    CLASS.prototype = {
        append: function(dom){
            var parent = document.getElementById(dom);

            if (parent && parent.append)
                parent.append(this.dom);
        },

        load: function(template){
            if (isLoaded)
                throw "Already loaded.";
            else
                isLoaded = true;
            
            // parse
            parse(template);
            // rendering 1page
            invalidate();
        }
    };

    return CLASS;
}();
