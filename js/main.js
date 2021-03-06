(function ($) { $(window).on("load", function () { $("#content-3").mCustomScrollbar({ scrollButtons: { enable: !0 }, theme: "light-thick", scrollbarPosition: "outside" }); $("#content-4").mCustomScrollbar({ theme: "rounded-dots", scrollInertia: 400 }); $("#content-5").mCustomScrollbar({ axis: "x", theme: "dark-thin", advanced: { autoExpandHorizontalScroll: !0 }, scrollbarPosition: "outside", keyboard: { scrollType: "stepped" }, mouseWheel: { axis: "x", }, documentTouchScroll: !0, }); $("#content-6").mCustomScrollbar({ axis: "x", theme: "light-3", advanced: { autoExpandHorizontalScroll: !0 } }); $("#content-7").mCustomScrollbar({ scrollButtons: { enable: !0 }, theme: "3d-thick" }); $("#content-8").mCustomScrollbar({ axis: "yx", scrollButtons: { enable: !0 }, theme: "3d", scrollbarPosition: "outside" }); $("#content-9").mCustomScrollbar({ scrollButtons: { enable: !0, scrollType: "stepped" }, keyboard: { scrollType: "stepped" }, mouseWheel: { scrollAmount: 188 }, theme: "rounded-dark", autoExpandScrollbar: !0, snapAmount: 188, snapOffset: 65 }) }) })(jQuery); $('input, textarea').focus(function () { $(this).parents('.form-group').addClass('focused') }); $('input, textarea').blur(function () { var inputValue = $(this).val(); if (inputValue == "") { $(this).removeClass('filled'); $(this).parents('.form-group').removeClass('focused') } else { $(this).addClass('filled') } })
const openBtn = document.querySelector('.toggle-btn-open'); const closeBtn = document.querySelector('.toggle-btn-close'); const mobileNav = document.querySelectorAll('.mobile'); const dbNone = document.querySelector('.toggle-btn-open'); openBtn.addEventListener('click', () => { mobileNav.forEach(nav_el => { nav_el.classList.add('visible') }); dbNone.classList.add('opacity') }); closeBtn.addEventListener('click', () => { mobileNav.forEach(nav_el => { nav_el.classList.remove('visible') }); dbNone.classList.remove('opacity') }); const floatingBtn = document.querySelector('.floating-btn'); const close_btn = document.querySelector('.close-btn'); const socialPC = document.querySelector('.social'); floatingBtn.addEventListener('click', () => { socialPC.classList.toggle('visible') }); close_btn.addEventListener('click', () => { socialPC.classList.remove('visible') }); $(() => { $(window).scroll(() => { var windowTop = $(window).scrollTop(); windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow') }); $('a[href*="#"]').on('click', function (e) { $('html,body').animate({ scrollTop: $($(this).attr('href')).offset().top - 0 }, 500); e.preventDefault() }); $('#logo').on('click', () => { $('html,body').animate({ scrollTop: 0 }, 500) }) })
$(document).ready(function () {
    $("#hero-slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        loop: true,
        items: 1,
    });
    $("#wwd").owlCarousel({
        items: 1,
        loop: true,
        margin: 2,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            650: {
                margin: 30,
                items: 2
            },
            1000: {
                items: 3,
                margin: 20
            },
        },
    });
});