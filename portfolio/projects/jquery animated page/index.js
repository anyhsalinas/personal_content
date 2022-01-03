$(window).ready(function(){

    /** translate **/
    var langua = navigator.language;
    if(langua == 'pt-BR' || langua == 'pt-PT') {
        $('.l_pt').css({'display':'inline'});
        $('.l_pt_block').css({'display':'block'});
        $('.l_pt_inlineblock').css({'display':'inline-block'});
        
        $('.l_en, .l_en_block, .l_en_inlineblock').css({'display':'none'});
    } else {
        $('.l_en').css({'display':'inline'});
        $('.l_en_block').css({'display':'block'});
        $('.l_en_inlineblock').css({'display':'inline-block'});
        
        $('.l_pt, .l_pt_block, .l_pt_inlineblock').css({'display':'none'});
    }
    
    /** translate button **/
    $('#l_pt').click(function(){
    	$('.l_en, .l_en_block, .l_en_inlineblock').hide();
    	$('.l_pt, .l_pt_block, .l_pt_inlineblock').show();
    		return false;
    });
	$('#l_en').click(function(){
    	$('.l_pt, .l_pt_block, .l_pt_inlineblock').hide();
    	$('.l_en, .l_en_block, .l_en_inlineblock').show();
    		return false;
    });	
    
    /** translate **/


    /********** loading message **********/
    setTimeout(function() {
        $('#loading').fadeOut(1000, 'swing');
    }, 200); 
    /********** loading message [end] **********/


    $(document).scroll(function(){
        let sectionsCenter = $("section").height() / 4;
        let elementPosition = $("#section-2").offset().top;
        let scrollPosition = $(this).scrollTop();
        if(scrollPosition > sectionsCenter) {
            /*
            $("html, body").animate({
                scrollTop: elementPosition
            }, 500);*/
        }
    });


    /********** ANIMATIONS **********/
    $('.animation-fade-slide-up').each(function(){
        $(this).animate({
            opacity: '1'
        }, 500)
    });

});