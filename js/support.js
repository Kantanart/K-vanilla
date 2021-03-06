function is_ListingRowPage(){
    //returns true or false if the the page is Listing Summary
    if($('section.listing-summary').length>0){
        return true;
    }
    else {
        return false;
    }
}
function setup_ListingSummary(){
    // we do this only ONE time and add classes to $(".listing-summary")
    $(".listing-summary").addClass('properties-rows').wrapInner('<div class="row" />');
    //...
}
function is_improvedListing(listing){
/* 
    return true if we changed this listing already
    return false if we need to change it
    ...
*/
    if($(listing).find('.improved').length>0){
        return true;
    }
    else {
        return false;
    }
}
function improve_img_row(){
    $( ".property .image .content a" ).each(function( index ) {
        child = $(this).children('img');
        $(this).empty().after(child);
    });
}

function add_class_improvelisting(){
    $(".listing-summary .tileItem").addClass('property').wrapInner('<div class="row" />');
    $(".listing-summary .property figure").addClass('image col-md-3').wrapInner('<div class="content" />');
}

function ajax_improveListing(listing){
    // changes html of ONE listing
    $(listing).addClass('improved');
    dictonary = map_listing_data($(listing).children('dl'));
    dictonary.title =$(listing).siblings('.tileHeadline').html();
    dictonary.linktarget= $(listing).parent().find('a:first').attr('href');
    $(listing).siblings('.tileHeadline').remove();
    //clear existing detail structure
    $(listing).empty();
    //set price & title
    $(listing).append('<h1 class="name-of-property">'+dictonary.title+'</h1>');
    //set location
    $(listing).append('<div class="status"><a href="'+ dictonary.linktarget +'">'+dictonary.loctype+' '+dictonary.propertytype+' - '+ dictonary.listingtype +'</a></div>');
    $(listing).append('<div class="location" ><div class="title"><a href="'+ dictonary.linktarget +'">'+dictonary.location+'</a></div></div>');
    $(listing).append('<div class="area"><span class="key" title="Area" >&nbsp</span><span class="value">'+dictonary.area+'</span></div>');
    $(listing).append('<div class="price"><p class="value" >'+ dictonary.price +'</p></div>');
        if(dictonary.type=="house"){
            $(listing).append('<div class="bedbath"><div class="bathrooms"></div><div class="value" title="Bedroom and Bathroom" >'+dictonary.bedbath+'</div></div>');    
        }
        else{
            $(listing).append('<div class="locationtype"><span class="key" title="Location Type" >&nbsp</span><span class="value">'+dictonary.locationtype+'</span></div>');   
        }     
}

function improveListing(listing){
    // changes html of ONE listing
    $(listing).addClass('improved');
    dictonary = map_listing_data($(listing).children('dl'));
    dictonary.title =$(listing).siblings('.tileHeadline').html();
    dictonary.linktarget= $(listing).parent().find('a:first').attr('href');
    $(listing).siblings('.tileHeadline').remove();
    //clear existing detail structure
    $(listing).empty();
    //set price & title
    $(listing).append('<h1 class="name-of-property">'+dictonary.title+'</h1>');
    //set location
    $(listing).append('<div class="status"><a href="'+ dictonary.linktarget +'">'+dictonary.loctype+' '+dictonary.propertytype+' - '+ dictonary.listingtype +'</a></div>');
    $(listing).append('<div class="location" ><div class="title"><a href="'+ dictonary.linktarget +'">'+dictonary.location+'</a></div></div>');
    $(listing).append('<div class="area"><span class="key" title="Area" >&nbsp</span><span class="value">'+dictonary.area+'</span></div>');
    $(listing).append('<div class="price"><p class="value" >'+ dictonary.price +'</p></div>');
        if(dictonary.type=="house"){
            $(listing).append('<div class="bedbath"><div class="bathrooms"></div><div class="value" title="Bedroom and Bathroom" >'+dictonary.bedbath+'</div></div>');    
        }
        else{
            $(listing).append('<div class="locationtype"><span class="key" title="Location Type" >&nbsp</span><span class="value">'+dictonary.locationtype+'</span></div>');   
        }     
}

/*Improve listing bar*/
function enhance_listingbar(){
    //remove the ugly [ 1 ] notation and give it a class
    $('.listingBar').html(function(i,html){
        foo = html.replace('[','<span class="active">').replace(']','</span>');
        return foo;
});
}

function map_listing_data(obj){
  //use data input to give back a easy to access array for mapping
  dict=[];
  counter = $(obj).children('dd').length;
  if(counter<10){
    dict.type ='land';  
  }
  else{
    dict.type ='house';
  }
  
  dict.price= obj[0].children[1].innerHTML;
  dict.listingtype= obj[0].children[5].innerHTML;
  dict.propertytype= obj[0].children[9].innerHTML;
  dict.loctype= obj[0].children[15].innerHTML;

  if(dict.type =="house"){
    dict.location = obj[0].children[13].innerHTML;
    dict.area = obj[0].children[19].innerHTML;
    dict.bedbath = obj[0].children[11].innerHTML;
    dict.locationtype = obj[0].children[15].innerHTML;
  }
  else{
      //landlistings have different indexes
      dict.location = obj[0].children[11].innerHTML;
      dict.area = obj[0].children[17].innerHTML;
      dict.bedbath ="";
      dict.locationtype = obj[0].children[13].innerHTML;
  }
  // parse location
  dict.location = parse_location(dict.location);
  return dict;
}

function parse_location(location){
    //unparsed: San Joaquín, San Joaquín de Flores, Flores, Heredia, Costa Rica
    //parsed: San Joaquín, Heredia, Costa Rica 
    
    try {
        var splitter = location.split(",");
        //react on different location types
        var last = splitter.length - 1;
        var center = splitter.length - 2;
        if(center>0 && last>1){
            location = splitter[0] +","+ splitter[center] +","+ splitter[last];
        }      
    }
    catch(err) {
        console.log(error);
    }
    return location;
}
function enhance_listiggrid(){ 
    $( ".listing-collection-tile .collection-item .item.location .item-body" ).each(function( index ) {
            mylocation = parse_location($(this).text());
            $(this).text(mylocation);
    });
    $( ".listing-collection-tile .collection-item .item.lot_size" ).each(function( index ) {
            //remove the label of lot size to replace it with css icon
            $(this).children('.item-heading').remove();
            $(this).prepend('<span class="key" title="Area"> </span>');
            
    });
    
}


/*Move menu to under add class "menu-bottom" in body */
function move_menubar(){
    $(".menu-bottom #navigation").insertAfter( $( "#carousel-wrapper" ) );
}

function switch_toggle(){
    $("button.navbar-toggle").click(function() {
         $(".navbar-collapse").toggleClass("list-open");
    });
}

function improve_site_social() {
    $(".site-social-switch a").click(function(){
        $(".site-social").toggleClass("site-close");
        $(".site-social-switch a").toggleClass("active");
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

function class_print_listing(){
    Print = $( ".listing.detail p:contains('Print Listing')" );
    $(Print).addClass("print-listing");
}

function switch_slider_cover(){
    if($(".template-layoutedit").length>0){
        $(".ps_coverintegrated .tile-name").replaceWith($( ".coverIntegrated" ));  
    }
    else{
        $(".ps_coverintegrated").replaceWith($( ".coverIntegrated" ));
    }
}

function cover_listing_height(){
    $("#content .listing-collection-tile").each(function() {
        var maxHeight = 0;
        $(this).find(".collection-item").each(function() {
            if($(this).height() > maxHeight) {
                maxHeight = $(this).height();  
            }
        });
        $(this).find(".collection-item").height(maxHeight);
    });
}

function resize_cover_listing_item(){
	console.log("resize:Start");
}

$(document).ready(function() {
    if (is_ListingRowPage()) {
        // set classes
        setup_ListingSummary();
        //change Listings
        $(".tileItem section").each(function(index){
            if(!is_improvedListing($(this))){
                improveListing($(this));
            }
        });
    }

    // only do when we have a listingbar
    if($('.listingBar').length > 0){
        enhance_listingbar();
    }
    
    if($('.listing.detail').length > 0){
        class_print_listing();
    }
    
    improve_site_social();
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
    // Ajax Complete
    $( document ).ajaxComplete(function() {
        if (is_ListingRowPage()) {
            //change Listings
            $(".tileItem section:not(.improved)").each(function(index){
                if(!is_improvedListing($(this))){
                    ajax_improveListing($(this));
                    console.log("Ajax : End");
                }
            });
        }
    });
    
    $( window ).load(function() {
        if($('#content .listing-collection-tile').length > 0){
            cover_listing_height();
        }
    });

    $(window).resize(function() {
        if($('#content .listing-collection-tile').length > 0){
            cover_listing_height();
        }
    });
    
});



