document.addEventListener("DOMContentLoaded", function(event) {
    toggleBackToTop();

    $(".wrapper").scroll(function(){
        toggleBackToTop();
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;

            if (panel.style.display === "block") {
                //panel.style.display = "none";
                $(panel).slideUp();
            } else {
                //panel.style.display = "block";
                $(panel).slideDown();
            }
        });
    }

    // var navMenuButton = $(".nav-menu-icon");
    // var navList = document.getElementsByClassName("nav-list");

    // navMenuButton.addEventListener("click", function() {
    //     navList.classList.toggle('show');
    // });

    $(".nav-menu-icon").click(function(){
        $(".nav-list").toggleClass('show');
    });
});

function toggleBackToTop() {
    let scroll = $(".wrapper").scrollTop();
        
    if (scroll > 0) {
        $("#btn_back_to_top").fadeIn();
    } else {
        $("#btn_back_to_top").fadeOut();
    }
}

