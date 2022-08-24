// Mobile Menu Burger/X Button Toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

// Open Contact Form Button
// @todo The form only stays open for a second or two
const contactBtn = document.getElementById('contact-btn');
const contactForm = document.getElementById('contact-form');

contactBtn.addEventListener('click', contactToggle);

function contactToggle() {
    //contactBtn.classList.toggle('open');
    contactForm.classList.toggle('block');
    contactForm.classList.toggle('hidden');
}

// Subscribe Btn Action - Not In Use at this time
/* const scriptURL = 'https://script.google.com/macros/s/AKfycbzbniPzDhvKO3kEIuSoImYI-vUPGLJudnuIRAdMNu1TYLQM1PDLSpJ4q5L7nKZNu5J-/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('sub-msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Thank you for Subscribing!'
        setTimeout(function() {
            msg.innerHTML = ''
        },3500)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
}) */

// Contact Form Toggle Function - 1st attempt
/* function contactFromFunction() {
    let contactDots = document.getElementById("contact-dots");
    let moreText = document.getElementById("contact-from");
    let btnText = document.getElementById("headerBtn");
  
    if (contactDots.style.display === "none") {
      contactDots.style.display = "block";
      btnText.innerHTML = "Read More...";
      moreText.style.display = "none";
    } else {
      contactDots.style.display = "none";
      btnText.innerHTML = "Read Less...";
      moreText.style.display = "inline";
    }
  } */

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

// About Section Read More/Read Less Button Function  
function aboutFunction() {
    let aboutDots = document.getElementById("about-dots");
    let moreText = document.getElementById("about-more");
    let btnText = document.getElementById("aboutBtn");
  
    if (aboutDots.style.display === "none") {
      aboutDots.style.display = "inline";
      btnText.innerHTML = "Read More...";
      moreText.style.display = "none";
    } else {
        aboutDots.style.display = "none";
        btnText.innerHTML = "Read Less...";
        moreText.style.display = "inline";
      } /* else {
      aboutBtn.style.display = "none";
      moreText.style.display = "inline";
    } */ /* Use this else stmt to not have a Read Less Button */
  }