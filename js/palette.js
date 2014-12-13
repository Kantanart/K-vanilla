function InitPalette() {
    $(".toggle-palette a").click(function(){
        $(".palette").toggleClass("open");
     });
}

function Add_menu_bottom() {
    $(".palette .headers ul li a.add-menu-bottom").click(function(){
        $("body").toggleClass("menu-bottom");
     });
}

function clickheaderaddclass() {
    $(".palette .headers ul li a.add-header-normal").click(function(){
        clickHeaderClass("header-normal")
     });
    $(".palette .headers ul li a.add-header-dark").click(function(){
        clickHeaderClass("header-dark")
     });
    $(".palette .headers ul li a.add-header-both").click(function(){
        clickHeaderClass("header-both")
     });
    $(".palette .headers ul li a.add-header-light").click(function(){
        clickHeaderClass("header-light")
     });
}

function Checkpalette() {
    if(!$(".menu-palette").length>0){
        $(".palette").remove();
    }
}

$(document).ready(function() {
    Checkpalette();
    InitPalette();
    Add_menu_bottom();
    clickheaderaddclass();
});
