

$(function () {
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


// parralax scrolling effect for each section
function scroller(section) {
    $(window).scroll(function () {

        var wScroll = $(this).scrollTop();
        var elements = section.find('*');

        if (wScroll > section.offset().top - ($(window).height() / 1.2)) {

            elements.each(function (i) {

                setTimeout(function () {
                    return elements.eq(i).addClass('is-showing');
                }, 25 * (i + 1));
            });
        }

    })
};
$(function () {
    scroller($('#portfolio'));
    scroller($('#my-skills'));
    scroller($('#contact'));
});
