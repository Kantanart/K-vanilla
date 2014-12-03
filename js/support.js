/*Move menu to under add class "menu-bottom" in body */
function move_menubar(){
    $(".menu-bottom #navigation").insertAfter( $( "#carousel-wrapper" ) );
}
function switch_toggle(){
    $("button.navbar-toggle").click(function() {
         $(".navbar-collapse").toggleClass("list-open");
    });
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

/*Switch Cover page - Listing search */
function toggle_listing_type(){
    $(".listing-search-tile #formfield-form-widgets-jacuzzi span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-pool span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-pool label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-air_condition span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-view_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-view_type label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-location_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-location_type label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-geographic_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-object_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-object_type label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-ownership_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal").addClass('collapser collapsed');
    
    $(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-air_condition span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
        
    });
    $(".listing-search-tile #formfield-form-widgets-pool label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-pool span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-pool label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-pool label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-pool label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-jacuzzi span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-view_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-view_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-view_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-view_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-view_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-location_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-location_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-location_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-location_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-location_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-geographic_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-object_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-object_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-object_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-object_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-object_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-ownership_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
}

$(document).ready(function() {
    switch_toggle();
    if($(".listing-search-tile.tile-content").length >0){
        toggle_listing_type();
    }
    
    if($("div.carousel").length >0){
        move_menubar();
    }
    if($(".doormatColumn").length >0){
        doormat_col_class=getDoormatClass();
        $("#footer-top-inner .doormatColumn").addClass(doormat_col_class);
    }
});

