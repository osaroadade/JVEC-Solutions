//Custom scrollbar
(function ($) {
    $(window).on("load", function () {

        $("#content-3").mCustomScrollbar({
            scrollButtons: { enable: true },
            theme: "light-thick",
            scrollbarPosition: "outside"
        });

        $("#content-4").mCustomScrollbar({
            theme: "rounded-dots",
            scrollInertia: 400
        });

        $("#content-5").mCustomScrollbar({
            axis: "x",
            theme: "dark-thin",
            advanced: { autoExpandHorizontalScroll: true },
            scrollbarPosition: "outside",
            keyboard: { scrollType: "stepped" },
            mouseWheel: {
                axis: "x",
            },
            documentTouchScroll:true,
        });

        $("#content-6").mCustomScrollbar({
            axis: "x",
            theme: "light-3",
            advanced: { autoExpandHorizontalScroll: true }
        });

        $("#content-7").mCustomScrollbar({
            scrollButtons: { enable: true },
            theme: "3d-thick"
        });

        $("#content-8").mCustomScrollbar({
            axis: "yx",
            scrollButtons: { enable: true },
            theme: "3d",
            scrollbarPosition: "outside"
        });

        $("#content-9").mCustomScrollbar({
            scrollButtons: { enable: true, scrollType: "stepped" },
            keyboard: { scrollType: "stepped" },
            mouseWheel: { scrollAmount: 188 },
            theme: "rounded-dark",
            autoExpandScrollbar: true,
            snapAmount: 188,
            snapOffset: 65
        });

    });
})(jQuery);

// Placeholder and Label Animation
$('input, textarea').focus(function () {
	$(this).parents('.form-group').addClass('focused');
});

$('input, textarea').blur(function () {
	var inputValue = $(this).val();
	if (inputValue == "") {
		$(this).removeClass('filled');
		$(this).parents('.form-group').removeClass('focused');
	} else {
		$(this).addClass('filled');
	}
})

//Nav Menu
const openBtn = document.querySelector('.toggle-btn-open');
const closeBtn = document.querySelector('.toggle-btn-close');
const mobileNav = document.querySelectorAll('.mobile');
const dbNone = document.querySelector('.toggle-btn-open');

openBtn.addEventListener('click', () => {
    mobileNav.forEach(nav_el => { nav_el.classList.add('visible') });
    dbNone.classList.add('opacity')
});

closeBtn.addEventListener('click', () => {
    mobileNav.forEach(nav_el => { nav_el.classList.remove('visible') });
    dbNone.classList.remove('opacity')
});

// GET IN TOUCH COMPONENT
const floatingBtn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const socialPC = document.querySelector('.social');

floatingBtn.addEventListener('click', () => {
	socialPC.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	socialPC.classList.remove('visible')
});

//On page scroll
$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 0
		},500);
		e.preventDefault();
	});
    
    //Scroll to top
    //Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
    });
	
});