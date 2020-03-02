
//console.log($(document).width())

if($(document).width() >= 992){
    $(".intro_right").niceScroll({
        cursorwidth:12,
        cursoropacitymin:0.4,
        cursorcolor:'#6e8cb6',
        cursorborder:'none',
        cursorborderradius:4,
        autohidemode:'leave'
    });
    $(".nicescrolls").niceScroll({
        cursorwidth:12,
        cursoropacitymin:0.4,
        cursorcolor:'#6e8cb6',
        cursorborder:'none',
        cursorborderradius:4,
        autohidemode:'leave'
    });
};

