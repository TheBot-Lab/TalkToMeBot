$('.card2').hover(function() {
    $( this ).find('.card-button2').stop(true, true);
    $( this ).find('.card-button2').fadeIn("fast");
    $( this ).find('.card-button2').animate({
        top: '128'
    }, 500, function() {
        $( this ).find('.card-button2').fadeOut('fast', function() {
            $( this ).css('top', '175px');
        });
    });
}, function() {
        $( this ).find('.card-button2').fadeOut('slow', function() {
            $( this ).find( '.card-button2' ).stop(true, true);
            $( this ).css('top', '175px');
        });
});
