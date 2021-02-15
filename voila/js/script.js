    jQuery(document).ready(function($) {
        $('.btn-responsive').on('click', function(event) {
            event.preventDefault();
            $(this).toggleClass('clicked');
            /* Act on the event */
            $('.menu-list-lg').toggle('400');
        });


        $(window).resize(function(event) {
            if ($(window).width() > 825) {
                $('.menu-list-lg').hide();
                $('.menu-list-lg').removeAttr('style');
            }
        });
    });