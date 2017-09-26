(function ($) {

    $(function () {

        var activeNav = $("#aboutButton");
        var hasScrolledDown = false;
        var navTitle = $('#scrolledTitle');
        var isNavTitleHidden = false;
        const navTitleOffset = navTitle[0].clientWidth;

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
        //hide the nav bar title at the beginining
        toggleNavTitle();

        $('.carousel').carousel({ fullWidth: true, indicators: false });

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        var changeContentPage = function (event, button, id) {
            event.preventDefault();

            $('.carousel').carousel('set', id);

            activeNav.removeClass("active");

            activeNav = $(button);
            activeNav.addClass("active")

        }

        $("#experienceButton").on("click", function (event) {
            changeContentPage(event, this, 1);
        })
        $("#projectsButton").on("click", function (event) {
            changeContentPage(event, this, 2);
        })
        $("#personalButton").on("click", function (event) {
            changeContentPage(event, this, 3);
        })
        $("#aboutButton").on("click", function (event) {
            changeContentPage(event, this, 4);
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
                    navTitle.css({ "margin-left": '-=' + navTitleOffset });
                    isNavTitleHidden = true;
                }
            }
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

