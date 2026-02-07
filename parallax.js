$(window).bind('scroll', function(e) {
    parallaxScroll()
});

function parallaxScroll() {
    let scrolled = $(window).scrollTop();

    $('#layer').css('top', (0-(scrolled*0.3)) + 'px');
    $('#fish1').css('left', (100+(scrolled*0.1)) + 'px');
    $('#fish1').css('top', (300+(scrolled*0.05)) + 'px');
    $('#fish2').css('top', (1200-(scrolled*0.3)) + 'px');
    $('#fish2').css('left', (500-(scrolled*0.05)) + 'px');
    $('#fish3').css('top', (1000-(scrolled*0.2)) + 'px');
    $('#fish3').css('left', (1500-(scrolled*0.25)) + 'px');
    $('#fish4').css('top', (300-(scrolled*0.1)) + 'px');
    $('#fish5').css('top', (1400-(scrolled*0.15)) + 'px');
}