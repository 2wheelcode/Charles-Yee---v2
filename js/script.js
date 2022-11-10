// Mobile Menu Burger/X Button Toggle
const btn = $("#menu-btn");
const menu = $("#menu");

btn.click(navToggle);
let mobileMenuOpen = false;
function navToggle() {
    btn.toggleClass('open');
    menu.toggleClass('flex');
    menu.toggleClass('hidden');

    mobileMenuOpen = !mobileMenuOpen;

    $('body').toggleClass('overflow-hidden');
    $('nav').first().toggleClass('h-screen')
}

// Default First Accordion Item Open
$(function(){
  $('.accordion-item-header').eq(0).trigger('click');
});

// Accordion Button
$(".accordion-item-header").click(
    event => {
        let accordionItemHeader = $(event.target);

        // Leave Uncommented if you only want to allow for the display of only one collapsed item at a time!
        // const currentlyActiveAccordionItemHeader = $(".accordion-item-header.active");
        // if (currentlyActiveAccordionItemHeader && !currentlyActiveAccordionItemHeader.is(accordionItemHeader)) {
        //     currentlyActiveAccordionItemHeader.toggleClass("active");
        //     currentlyActiveAccordionItemHeader.next().css("maxHeight", '0');
        // }

        accordionItemHeader.toggleClass('active');
        const accordionItemBody = accordionItemHeader.next();
        if (accordionItemHeader.hasClass("active")) {
            accordionItemBody.css("maxHeight", `${accordionItemBody.get(0).scrollHeight}px`);
        } else {
            accordionItemBody.css("maxHeight", '0');
        }

    }
);


// Open Contact Form
$('.contact-btns').click(contactToggle);

const contactFormCloseButton = $('#contact-us-close-btn');
const contactFormWrapper = $('#contact-form-wrapper');
const contactForm = $('#contact-form');
const formSubmitButton = $('#submitBtn');
const appointmentBtn = $('#appointment');

contactForm.submit(function (event) {
    event.preventDefault();
});

contactFormCloseButton.click(contactToggle)
appointmentBtn.click(contactToggle);
formSubmitButton.click(submitForm2);

function contactToggle() {
    if(!mobileMenuOpen) {
        $('body').toggleClass('overflow-hidden');
    }
    contactFormWrapper.toggleClass('block');
    contactFormWrapper.toggleClass('hidden');
}

let parallaxRight = document.getElementsByClassName('parallax-right');
new simpleParallax(parallaxRight, {
    scale: 1.1,
    orientation: 'right'
});
let parallaxLeft = document.getElementsByClassName('parallax-left');
new simpleParallax(parallaxLeft, {
    scale: 1.1,
    orientation: 'left'
});
let parallaxUp = document.getElementsByClassName('parallax-up');
new simpleParallax(parallaxUp, {
    orientation: 'up',
    scale: 1.5
});


// Contact Form with Ajax & PHP
function submitForm2() {
    $('#contact-dots').html('please wait...');
    let formdata = new FormData();
    formdata.append('name', $('#name').val());
    formdata.append('email', $('#email').val());
    formdata.append('subject', $('#subject').val());
    formdata.append('message', $('#message').val());
    $.ajax({
        url: 'action-page.php',
        data: formdata,
        processData: false,
        contentType: false,
        type: 'POST',
    })
        .done(function () {
            $('#contact-dots').html('<h2>Thanks ' + $('#name').value + ', your message has been sent. <br>Charles will be in touch with you shortly</h2>');
        })
        .fail(function () {
            alert("error");
        })
        .always(function () {
            contactToggle();
            cleanUpForm();
        });
}

function cleanUpForm() {
    $('#contact-dots').html('');
    contactForm.get(0).reset()
}

// Header Read More/Red Less Button Function  
function headerFunction() {
    let dots = $("#header-dots");
    let moreText = $("#header-more");
    let btnText = $("#headerBtn");

    if (dots.css("display") === "none") {
        dots.css("display", "inline");
        btnText.html("Read More...");
        moreText.css('max-height', '0')
    } else {
        dots.css("display", "none");
        btnText.html("Read Less...");
        moreText.css('max-height', '600px')
    }
}

AOS.init({
    once: true,
});