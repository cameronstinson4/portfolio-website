(function ($) {

    $(function () {

        var activeNav = $("#aboutButton");
        var hasScrolledDown = false;
        var navTitle = $('#scrolledTitle');
        var isNavTitleHidden = false;
        const navTitleOffset = navTitle[0].clientWidth;
        const carouselPadding = 15;

        function toggleNavTitle() {
            if (isNavTitleHidden) {
                //show nav bar title
                navTitle.animate({ "margin-left": '+=' + navTitleOffset });
                isNavTitleHidden = false;
            }
            else {
                //hiding nav title
                navTitle.css({ "margin-left": '-=' + navTitleOffset });
                isNavTitleHidden = true;
            }
        }

        toggleNavTitle();

        $('.carousel').carousel({ fullWidth: true, indicators: false });

        $('.parallax').parallax();

        var changeContentPage = function (event, button, id) {
            event.preventDefault();

            var page = $('html, body');

            page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
                page.stop();
            });

            page.animate({
                scrollTop: $("#mainLink").offset().top - $("nav").height(),
            }, 1000, () => {
                page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            });

            $('.carousel').carousel('set', id);

            activeNav.removeClass("active");

            activeNav = $(button);
            activeNav.addClass("active")

        }

        $("#experienceButton").on("click", function (event) {
            changeContentPage(event, this, 1);
            var height = $("#experience").height();
            $(".carousel").css("height", `${height + carouselPadding}px`);
        })
        $("#projectsButton").on("click", function (event) {
            changeContentPage(event, this, 2);
            var height = $("#projects").height();
            $(".carousel").css("height", `${height + carouselPadding}px`);
        })
        $("#personalButton").on("click", function (event) {
            changeContentPage(event, this, 3);
            var height = $("#personal").height();
            $(".carousel").css("height", `${height + carouselPadding}px`);
        })
        $("#aboutButton").on("click", function (event) {
            changeContentPage(event, this, 4);
            var height = $("#about").height();
            $(".carousel").css("height", `${height + carouselPadding}px`);
        })

        $(window).scroll(function () {
            if ($(document).scrollTop() > window.innerHeight / 2) {
                if (isNavTitleHidden) {
                    //show nav bar title
                    navTitle.animate({ "margin-left": '+=' + navTitleOffset });
                    isNavTitleHidden = false;
                }
            }
            else if ($(document).scrollTop() <= window.innerHeight / 2) {
                if (!isNavTitleHidden) {
                    //hiding nav title
                    navTitle.animate({ "margin-left": '-=' + navTitleOffset });
                    isNavTitleHidden = true;
                }
            }
        });

        //mobile responsive about card
        function checkPosition() {
            if (window.matchMedia('(max-width: 768px)').matches) {
                $(".card.horizontal").removeClass("horizontal");
            }
        }

        checkPosition()

        $(".carousel").css("height", `${$("#about").height() + carouselPadding}px`);

        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

