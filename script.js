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

