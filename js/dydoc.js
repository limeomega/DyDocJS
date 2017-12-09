dydoc = function () {

    var canvas;

    var info, // document infomation
        pages; // pages

    var currentPage = 0,
        isLoaded = false;

    /* template 
    {
        info : {
            version : (#VERSION_INFOMATION)
        },
        pages : [ //page container
            {
                info: {
                    size: 'A4' // page kind or '210mm 297mm'
                },
                objects: [

                ]
            },
            {

            },
            ...
        ]
    }
    */

    var invalidate = function(option){
        requestAnimationFrame(function(){
            if (!canvas)
                return;

            var ctx = canvas.getContext('2d'),
                width = canvas.width,
                height = canvas.height;

            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, width, height);
        }.bind(this));
    }

    var CLASS = function (template) {
        canvas = document.createElement('canvas');

        // default A4
        canvas.width = 793;
        canvas.height = 1123;

        template && this.load(template);
    };

    CLASS.prototype = {
        append: function(selector){
            var parent = document.querySelector(selector);

            if (parent && parent.append)
                parent.append(canvas);

            return this;
        },

        load: function(template){
            // validation check
            //// type check
            if (typeof template != 'object')
                throw "Parameter's type is illegal.";

            //// loaded check
            if (isLoaded)
                throw "Already loaded.";
            else
                isLoaded = true;
            
            // parsing
            info = template.info;
            for (var i in template.pages)
                pages.push(new dypage(template.pages[i]));

            // rendering 1page
            invalidate();

            return this;
        },

        css: function(cssObject){
            for (var index in cssObject){
                if (canvas.style[index] !== undefined)
                    canvas.style[index] = cssObject[index]; 
            }

            return this;
        },

        attr: function(attrObject){
            for (var index in attrObject){
                if (canvas[index] !== undefined)
                    canvas[index] = attrObject[index]; 
            }

            return this;
        }
    };

    return CLASS;
}();
