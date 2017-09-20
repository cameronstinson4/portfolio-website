(function($){
    $(function(){

        var activeContent = $("#about");
        var activeNav = $("#aboutButton");
        
        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        var changeContentPage = function(event, button, id) {
            event.preventDefault();

            activeContent.removeClass("scale-in");
            activeContent.addClass("nosize scale-out");
            activeNav.removeClass("active");

            activeContent = $(id);
            activeNav = $(button);
            activeNav.addClass("active")

            activeContent.removeClass("nosize scale-out");
            activeContent.addClass("scale-in");
        }

        $("#experienceButton").on("click", function(event) {
            changeContentPage(event, this, "#experience");
        })        
        $("#projectsButton").on("click", function(event) {
            changeContentPage(event, this, "#projects");
        })        
        $("#personalButton").on("click", function(event) {
            changeContentPage(event, this, "#personal");
        })        
        $("#aboutButton").on("click", function(event) {
            changeContentPage(event, this, "#about");
        })
    }); // end of document ready
})(jQuery); // end of jQuery name space

