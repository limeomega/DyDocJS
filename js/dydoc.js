dydoc = function () {

    var canvas;

    var info, // document infomation
        pages; // pages

    var currentPage = 0,
        isLoaded = false;

    var parse = function(template){
        /* template 
            {
                info : {
                    version : (#VERSION_INFOMATION)
                },
                pages : [ //page container
                    {

                    },
                    {

                    },
                    ...
                ]
            }
         */
    }

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

    var CLASS = function () {
        canvas = document.createElement('canvas');

        // default A4
        canvas.width = 793;
        canvas.height = 1123;
    };

    CLASS.prototype = {
        append: function(dom){
            var parent = document.getElementById(dom);

            if (parent && parent.append)
                parent.append(canvas);

            return this;
        },

        getCanvas: function(dom){
            return canvas;
        },

        load: function(template){
            if (isLoaded)
                throw "Already loaded.";
            // parse
            parse(template);
            // rendering 1page
            invalidate();

            isLoaded = true;
        },

        attr: function(name, value){
            
        }
    };

    return CLASS;
}();