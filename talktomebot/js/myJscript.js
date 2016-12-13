$(".card2").hover(function() {
    $( ".card-button2" ).stop(true);
    $(".card-button2").fadeIn("fast");
    $(".card-button2").animate({
        top: "128"
    }, 500, function() {
        
    });
}, function() {
        $(".card-button2").fadeOut("fast", function() {
            $(".card-button2").css("top", "175px");
        });
});