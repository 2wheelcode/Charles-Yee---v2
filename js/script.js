// Mobile Menu Burger/X Button Toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

// Open Contact Form Top Menu Button
const contactBtns = document.getElementsByClassName('contact-btns');
const contactFormCloseButton = document.getElementById('contact-us-close-btn');
const contactFormWrapper = document.getElementById('contact-form-wrapper');
const contactForm = document.getElementById('contact-form');
const formSubmitButton = document.getElementById('submitBtn');
const appointmentBtn = document.getElementById('appointment');

contactForm.addEventListener('submit', function(event){
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

// function submitForm1() {
//   contactForm.requestSubmit()
//   contactFormWrapper.classList.toggle('block');
//   contactFormWrapper.classList.toggle('hidden');
//   contactForm.reset()
// }

// function handleEvent(e) {
//   console.log( `${e.type}: ${e.loaded} bytes transferred\n`)
// }

// function addListeners(xhr) {
//   xhr.addEventListener('loadstart', handleEvent);
//   xhr.addEventListener('load', handleEvent);
//   xhr.addEventListener('loadend', handleEvent);
//   xhr.addEventListener('progress', handleEvent);
//   xhr.addEventListener('error', handleEvent);
//   xhr.addEventListener('abort', handleEvent);
// }


// function submitForm3(){
//   const request = new XMLHttpRequest();
//   const successMsg = document.getElementById('success-msg');
//   // addListeners(request);
//   request.open("POST", "/action-page.php");
//   request.addEventListener('loadend', function(){
//     if(request.status === 200){
//       //hide contact form
//       contactFormWrapper.classList.toggle('block');
//       //contactFormWrapper.classList.toggle('hidden');
//       //clear out form values
//       contactForm.reset()
//       //TODO: show a 'message sent dialog' 
//       console.log('Message Successfully Sent');
//       // Timeout the Success Message   
//       setTimeout(() => {
//         contactFormWrapper.classList.toggle('block');
//       }, '1500')
//         contactFormWrapper.classList.toggle('hidden');
        
//     }
//     if(request.status !== 200){
//       console.log('error', request.statusText, request.status)
//       setTimeout(() => {
//         contactFormWrapper.classList.toggle('block');
//       }, '1500')
//         contactFormWrapper.classList.toggle('hidden');
//     }
//   });
//   request.send(new FormData(contactForm));
// }

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
  ajax.onloadend = function() {
    if(ajax.readyState == 4 && ajax.status === 200) {
      if(ajax.responseText === 'success') {
        document.getElementById('contact-dots').innerHTML = '<h2>Thanks ' + document.getElementById('name').value + ', your message has been sent. <br>Charles will be in touch with you shortly</h2>';
      } else {
        //document.getElementById('status').innerHTML = ajax.responseText;
      }
    }
    contactToggle();
    cleanUpForm();
  }
  ajax.onerror = function(error){
    contactToggle();
    cleanUpForm();
  }
  ajax.send(formdata);
}

function cleanUpForm(){
  document.getElementById('contact-dots').innerHTML = '';
  contactForm.reset()
}


// Subscribe Btn Action - Not In Use at this time
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzbniPzDhvKO3kEIuSoImYI-vUPGLJudnuIRAdMNu1TYLQM1PDLSpJ4q5L7nKZNu5J-/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById('sub-msg')

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//         msg.innerHTML = 'Thank you for Subscribing!'
//         setTimeout(function() {
//             msg.innerHTML = ''
//         },3500)
//         form.reset()
//     })
//     .catch(error => console.error('Error!', error.message))
// })

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
// @todo 
// Not in use
// function aboutFunction() {
//     let aboutDots = document.getElementById("about-dots");
//     let moreText = document.getElementById("about-more");
//     let btnText = document.getElementById("aboutBtn");
  
//     if (aboutDots.style.display === "none") {
//       aboutDots.style.display = "inline";
//       btnText.innerHTML = "Read More...";
//       moreText.style.display = "none";
//     } /* else {
//         aboutDots.style.display === "none";
//         btnText.innerHTML = "Read Less...";
//         moreText.style.display = "inline";
//       } */ else {
//       aboutBtn.style.display = "none";
//       moreText.style.display = "inline";
//     } /* Use this else stmt to not have a Read Less Button */
//   }