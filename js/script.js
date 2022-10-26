// Mobile Menu Burger/X Button Toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

// Accordion Button
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

// Open Contact Form
const contactBtns = document.getElementsByClassName('contact-btns');
const contactFormCloseButton = document.getElementById('contact-us-close-btn');
const contactFormWrapper = document.getElementById('contact-form-wrapper');
const contactForm = document.getElementById('contact-form');
const formSubmitButton = document.getElementById('submitBtn');
const appointmentBtn = document.getElementById('appointment');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
});

([...contactBtns]).forEach(contactButton => {
    contactButton.addEventListener('click', contactToggle);
})

contactFormCloseButton.addEventListener('click', contactToggle)
appointmentBtn.addEventListener('click', contactToggle);
formSubmitButton.addEventListener('click', submitForm2);

function contactToggle() {
    document.getElementsByTagName('body').item(0).classList.toggle('overflow-hidden');
    contactFormWrapper.classList.toggle('block');
    contactFormWrapper.classList.toggle('hidden');
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
    document.getElementById('contact-dots').innerHTML = 'please wait...';
    let formdata = new FormData();
    formdata.append('name', document.getElementById('name').value);
    formdata.append('email', document.getElementById('email').value);
    formdata.append('subject', document.getElementById('subject').value);
    formdata.append('message', document.getElementById('message').value);
    let ajax = new XMLHttpRequest();
    ajax.open('POST', 'action-page.php');
    ajax.onloadend = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            if (ajax.responseText === 'success') {
                document.getElementById('contact-dots').innerHTML = '<h2>Thanks ' + document.getElementById('name').value + ', your message has been sent. <br>Charles will be in touch with you shortly</h2>';
            } else {
                //document.getElementById('status').innerHTML = ajax.responseText;
            }
        }
        contactToggle();
        cleanUpForm();
    }
    ajax.onerror = function (error) {
        contactToggle();
        cleanUpForm();
    }
    ajax.send(formdata);
}

function cleanUpForm() {
    document.getElementById('contact-dots').innerHTML = '';
    contactForm.reset()
}

// Header Read More/Red Less Button Function  
function headerFunction() {
    let dots = document.getElementById("header-dots");
    let moreText = document.getElementById("header-more");
    let btnText = document.getElementById("headerBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less...";
        moreText.style.display = "inline";
    }
}