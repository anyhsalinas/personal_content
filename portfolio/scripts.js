$(document).ready(function(){

    /** translation [start] **/
    var langua = navigator.language;
    if(langua == "pt-BR" || langua == "pt-PT") {
        $(".l_pt").css({"display":"inline"});
        $(".l_pt_block").css({"display":"block"});
        $(".l_pt_inlineblock").css({"display":"inline-block"});
        
        $(".l_en, .l_en_block, .l_en_inlineblock").css({"display":"none"});
    } else {
        $(".l_en").css({"display":"inline"});
        $(".l_en_block").css({"display":"block"});
        $(".l_en_inlineblock").css({"display":"inline-block"});
        
        $(".l_pt, .l_pt_block, .l_pt_inlineblock").css({"display":"none"});
    }
    
    /** translate button **/
    $("#l_pt").click(function(){
    	$(".l_en, .l_en_block, .l_en_inlineblock").hide();
    	$(".l_pt, .l_pt_block, .l_pt_inlineblock").show();
    		return false;
    });
	$("#l_en").click(function(){
    	$(".l_pt, .l_pt_block, .l_pt_inlineblock").hide();
    	$(".l_en, .l_en_block, .l_en_inlineblock").show();
    		return false;
    });	
    /** translation [end] **/


     /********** back to top button **********/
     $(this).scroll(function(){
        if ($(this).scrollTop() >= 100) {
            $(".btt-button").fadeIn("slow");
        } else {
            $(".btt-button").fadeOut("slow");
        };
    });
    $(".btt-button").click(function(){
        $("html, body").animate({
            scrollTop: '0px'
        }, 500);
        return false;
    });
   /********** back to top button **********/


    /*** loading message [start] ***/
    setTimeout(function() {
        $("#loading").fadeOut(1000, "swing");
    }, 200);
    /*** loading message [end] ***/
    
});