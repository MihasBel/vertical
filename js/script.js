    // navbar
$(window).scroll(function() {
    if ($(this).scrollTop() > 50){
        $('.navbar').addClass("navbar-static");

    }
    else{
        $('.navbar').removeClass("navbar-static");

    }
});
    // popup
var popup = document.querySelector('.popup');
var popupOpen = document.querySelector('.popup-open');
var popupClose = popup.querySelector('.popup-close');
popupOpen.addEventListener('click' , function () {
    popup.classList.remove('hidden');
})

popupClose.addEventListener('click' , function () {
    popup.classList.add('hidden');
})

addEventListener("keydown", function(event) {
    if (event.keyCode == 27)
        popup.classList.add('hidden');
});
    // кнопка к началу
var smoothJumpUp = function() {
    if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 20);
    }
};
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300){
            $('.topcontrol').addClass("show");

        }
        else{
            $('.topcontrol').removeClass("show");

        }
    });

 // anchorTop
    var smoothJumpUpFast = function() {
        if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
            document.documentElement.scrollIntoView(true);

        }
    };