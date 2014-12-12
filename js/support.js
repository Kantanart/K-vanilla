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

        //listing grid
        if($(".listing-collection-tile").length>0){
            //prepare listing grid
            enhance_listiggrid();      
        }
    //listing row
    var width_indicator = $('#maincontent').attr('class');
    switch(width_indicator) {
        case 'span12':
            //no portlet
            text_width_indicator = 'col-md-9';
            title_width_indicator = 'col-md-6';
            price_width_indicator = 'col-md-3';
            break;
        case 'span9':
            // one portlet
            text_width_indicator = 'col-md-6';
            title_width_indicator = 'col-md-4';
            price_width_indicator = 'col-md-2';
            break;
        case 'span6':
            //two portlets
            text_width_indicator = 'col-md-3';
            title_width_indicator = 'col-md-2';
            price_width_indicator = 'col-md-1';
            break;
        default:
            text_width_indicator = 'col-md-6';
    }
        $(".listing-summary").addClass('properties-rows').wrapInner('<div class="row" />');
        $(".listing-summary .tileItem").addClass('property ' + width_indicator).wrapInner('<div class="row propertyrow" />');
        $(".listing-summary .property .row figure").addClass('image span3').wrapInner('<div class="content" />');
        // move image out of parent link
        $( ".listing-summary .property .row .image .content a" ).each(function( index ) {
            child = $(this).children('img');
            $(this).empty().after(child);
        });
        //prepare listing text
        $(".listing-summary .property .row section").addClass('body ' + text_width_indicator);
        $( ".listing-summary .property .row .body" ).each(function( index ) {
            dictonary = map_listing_data($(this).children('dl'));
            dictonary.title =$(this).siblings('.tileHeadline').html();
            dictonary.linktarget= $(this).parent().find('a:first').attr('href');
            $(this).siblings('.tileHeadline').remove();
            //clear existing detail structure
            $(this).empty();
            //set price & title
            $(this).append('<h1 class="name-of-property">'+dictonary.title+'</h1>');

            //set location
            $(this).append('<div class="location"><a href="'+ dictonary.linktarget +'">'+dictonary.loctype+' '+dictonary.propertytype+' - '+ dictonary.listingtype +'</a></div>');
           
            $(this).append('<div class="title-price row" ><div class="title"><a href="'+ dictonary.linktarget +'">'+dictonary.location+'</a></div></div>');
            if(dictonary.type=="house"){
                $(this).append('<div class="bedrooms" title="Bedroom and Bathroom" >'+dictonary.bedbath+'</div><div class="bathrooms" />');    
            }
            else{
                $(this).append('<div class="locationtype"><span class="key" title="Location Type" >&nbsp</span><span class="value">'+dictonary.locationtype+'</span></div>');   
            }
             $(this).append('<div class="area"><span class="key" title="Area" >&nbsp</span><span class="value">'+dictonary.area+'</span><div class="price" >'+ dictonary.price +'</div></div>');
            
            
        });
});

