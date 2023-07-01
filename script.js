/* Menu-container */
const About = document.querySelector('.About')
const a = document.querySelectorAll('a');
const Services = document.querySelector('.Services')
const Contact = document.querySelector('.Contact')

let current = document.querySelector('.current');

for(let anchor of a){
    anchor.addEventListener('click',(e)=>{
        e.preventDefault();

        {
            current.classList.remove("current") 
        }
        let str = '.'+anchor.id+'-sec';
        current = document.querySelector(str);
        
        current.classList.add("current")
     
    })
}

/* For line under the link of nav*/
let boxes = document.querySelectorAll('.menu-links-box');
let underlined = document.querySelector('.underline');

for(let box of boxes){
   
    box.addEventListener('click',()=>{
        if(underlined != box) underlined.classList.remove('underline');
        box.classList.add('underline')
        underlined = box;
    })

    box.addEventListener("mouseenter", () => {
        
        if(underlined != box) underlined.classList.remove('underline')

        box.classList.add('underline');
    });

    box.addEventListener("mouseleave", (e) => {
        if(underlined != box) box.classList.remove('underline')

        underlined.classList.add('underline');
    }); 
}

/*Menu-container over*/

/*Menu-container visible when nav-btn clicked*/

const toggleBtn = document.querySelector('.toggle-btn')
const menuContainer = document.querySelector('.menu-container')
const frontPage = document.querySelector('.front-page')
toggleBtn.addEventListener('click',()=>{
    menuContainer.classList.toggle('menu-display')
    frontPage.classList.toggle('shift-right');
    toggleBtn.classList.toggle('toggle-btn-onclick');

})



/*Menu-container visible when nav-btn clicked over*/