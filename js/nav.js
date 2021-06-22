function onScroll() {
    const title = document.getElementById('title-bg')
    const headerBar = document.getElementById()
}

$(document).ready(function () {
    // function to open/close nav
    function toggleNav() {
        // if nav is open, close it
        if ($("nav").is(":visible")) {
            $("nav").fadeOut();
            $("button").removeClass("menu");
        }
        // if nav is closed, open it
        else {
            $("button").addClass("menu");
            $("nav").fadeIn().css('display', 'flex');
        }
    }

    // when clicking + or ☰ button
    $("button").click(function () {
        // when clicking ☰ button, open nav
        if ($("header").hasClass("open")) {
            toggleNav();
        }
        // when clicking + button, open header
        else {
            $("header").addClass("open");
            // $('header').remove();
        }
    });

    // close nav
    $("#nav-close").click(function () {
        toggleNav();
    });

    // scroll to sections
    $("nav li").click(function () {
        // get index of clicked li and select according section
        var index = $(this).index();
        var target = $("content hr").eq(index);

        toggleNav();

        $('html,body').delay(200).animate({
            scrollTop: target.offset().top
        }, 1800);
    });

});