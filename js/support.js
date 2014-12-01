function move_menubar(){
    $(".menu-bottom #navigation").insertAfter( $( "#carousel-wrapper" ) );
}

/*get the existing doormat columns and translate them to the span grid system*/
function getDoormatClass(){
    var col_class="";
    if($('.doormatColumn.column-0').length>0){
        //just one column
        col_class="col-md-12";
    }
    if($('.doormatColumn.column-1').length>0){
        //two columns
        col_class="col-md-6";
    }
    if($('.doormatColumn.column-2').length>0){
        //three columns
        col_class="col-md-4";
    }
    if($('.doormatColumn.column-3').length>0){
        //four columns
        col_class="col-md-3";
    }
    if($('.doormatColumn.column-4').length>0){
        //five columns
        col_class="";
    }
    if($('.doormatColumn.column-5').length>0){
        //six columns
        col_class="col-md-2";
    }
    
    return col_class;
}
$(document).ready(function() {
    if($("div.carousel").length >0){
        move_menubar();
    }
    if($(".doormatColumn").length >0){
        doormat_col_class=getDoormatClass();
        $("#footer-top-inner .doormatColumn").addClass(doormat_col_class);
    }

});

