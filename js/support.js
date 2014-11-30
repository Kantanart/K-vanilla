function move_menubar(){
    $(".menu-bottom #navigation").insertAfter( $( "#carousel-wrapper" ) );
}

$(document).ready(function() {
    if($("div.carousel").length >0){
        move_menubar();
    }


});

