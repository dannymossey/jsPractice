// header navigation setup
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach
(i => i.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

}));

// landing page button

const joinButton = document.getElementById('join-me');
const infoSection = document.querySelector('.intro-landing');

// joinButton.addEventListener('click', e =>{
//     e.stopPropagation()
//     console.log(e);
// });


const landingBox = document.querySelector('.landing-area');
const buttonContainer = document.querySelector('.button-container');


// landingBox.addEventListener('click', e =>{
//     console.log('hello');
// });


// DOM MANIPULATION
const newEl = document.createElement('div')
newEl.className = 'newEl';
const newElText = document.createTextNode('Congratulations on joining the team!');
newEl.appendChild(newElText);
buttonContainer.appendChild(newEl);


joinButton.addEventListener('click', () =>{
    newEl.classList.toggle('show');
    document.body.style.backgroundImage = "url('../bg2.jpg')";
});

// scroll event practice 

// window.addEventListener('scroll',()=>{
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scroll = window.scrollY;
//     console.log(scrollable);

//     if(scrollable === scroll){
//         alert('booo');
//     }

// });

// mutation observer

const mutationObserver = new MutationObserver(entries => {
    console.log(entries);
});

mutationObserver.observe(infoSection, {
    subtree: true,
    characterData: true,
    attributes: true,
    attributeOldValue: true,
});

infoSection.children[0].textContent = 'hello';




// load UI Event 


// setTimeout(alert, 2000, 'hello');

// function timer(){
//     setTimeout(loader, 1000);
// }

// function loader(){
//     alert('hello');
// }

// window.addEventListener('load', timer);


// form validation

const name = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('phone')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = [];
    if(name.value === '' || name.value === null){
        messages.push('name is required')
    }

    if(number.value.length <= 5){
        messages.push('Please input your phone number correctly')
    }
    if(number.value.length >= 20){
        messages.push('Too many character for a phone number, input number correctly')
    }

    if(typeof number.value === "string"){
        messages.push('Please input your numbers')
    }

    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(', ');

    }



    


})
