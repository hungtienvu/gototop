<script type="text/javascript">
jQuery(document).ready( function() {
    /*go-top-right alignment*/
    function go_top_right(){
        var contents_w = jQuery('#body .contents').width();
        var window_w = jQuery(window).width();
        var go_top_y = ( window_w - contents_w - 120 )/2;
        if(go_top_y>10){
            jQuery('#go-top').css('right', go_top_y +'px');
        }else{
            jQuery('#go-top').css('right','10px');
        }
    }
    go_top_right();

    jQuery(window).resize(function() {
        /* Act on the event */
        go_top_right();
    });

    jQuery('#go-top').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        jQuery("html, body").animate({scrollTop: 0},600);
    });

    jQuery(window).scroll(function(event) {
        /* Act on the event */
        if(jQuery(this).scrollTop() > (jQuery(document).height()/3) ){
            jQuery('#go-top').fadeIn('500').show();
        }else{
            jQuery('#go-top').fadeOut('500').hide();
        }
    });

});
</script>    