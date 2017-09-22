(function($){
    $(function(){
        var activeNav = $("#aboutButton");
        
        $('.carousel').carousel({fullWidth: true, indicators: false});
        
        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        var changeContentPage = function(event, button, id) {
            event.preventDefault();

            $('.carousel').carousel('set', id);
            
            activeNav.removeClass("active");

            activeNav = $(button);
            activeNav.addClass("active")

        }

        $("#experienceButton").on("click", function(event) {
            changeContentPage(event, this, 1);
        })        
        $("#projectsButton").on("click", function(event) {
            changeContentPage(event, this, 2);
        })        
        $("#personalButton").on("click", function(event) {
            changeContentPage(event, this, 3);
        })        
        $("#aboutButton").on("click", function(event) {
            changeContentPage(event, this, 4);
        })
    }); // end of document ready
})(jQuery); // end of jQuery name space

