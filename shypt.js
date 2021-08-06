const nav=document.querySelector('.nav1')
const clickicon=document.querySelector('.icon')
const shyptauto=document.getElementById('autoeffect')
// const win=window.onload()
const toast=document.querySelector('#toasts')
window.addEventListener('scroll',()=>{
   
    if(window.scrollY>nav.offsetHeight+50){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
})
 function createNotification(){
     const notif=document.createElement('div')
     notif.classList.add('toast')
     notif.innerText='Welcome To Shypt Solution'
     toast.appendChild(notif)
     setTimeout(() => {
        notif.remove()
     },3000);
     
 }
createNotification()
 document.addEventListener('click',()=>{createicon(e)})

 const createicon=(e)=>{
     const htmlicon=document.createElement('i')
     createHeart.classList.add('fab fa-html5 icon')
     createHeart.classList.add('fa-html5')
     createHeart.classList.add('icon')

     const x=e.clientX
     const y=e.clientY
    console.log(x,y)
     const leftOffset=e.target.leftOffset
     const topOffset=e.target.topOffset

     clickicon.style.top
 }

 let idx=1;
 let speed=50;
 const text='Welcome to Shypt Solution'

 writeText()
 function writeText(){
     shyptauto.innerText=text.slice(0,idx)
     idx++

     if(idx>text.length){
         idx=1
     }

     setTimeout(() => {
         writeText()
     }, 100);
 }



//  left nav bar

const open_btn=document.querySelector('#openbtn')
const close_btn=document.querySelector('.close-btn')
const navbarleft=document.querySelectorAll('.nav2')

open_btn.addEventListener('click',()=>{
    navbarleft.forEach(nav_el => {
        nav_el.classList.add('visible')
    });
})

close_btn.addEventListener('click',()=>{
    navbarleft.forEach(nav_el => {
        nav_el.classList.remove('visible')
    });
})

const labels=document.querySelectorAll('.form-control label')

labels.forEach(label=>{
    label.innerHTML=label.innerText
    .split('')
    .map((letter,idx)=>`<span style="transition-delay:${idx*30}ms" >${letter}</span>`)
    .join('')
})


//testimonial

const tesitmonialContainer=document.querySelector('.testimonial-container')
const testimonial=document.querySelector('.testimonial')
const userImage=document.querySelector('.user-image')
const userName=document.getElementById('user-name')
const role=document.querySelector('.role')
const leftbtn=document.getElementById('right')
const rightbtn=document.getElementById('left')

const testimonials=[{
    name:'Demo Name One',
    position:'Student at NITRR',
    photo:'https://randomuser.me/api/portraits/women/43.jpg',
    text:"It's looking good It's looking good It's looking good It's looking good It's looking good It's looking good It's looking good It's looking good It's looking good It's looking good ",
},{
    name:'Demo Name 2',
    position:'Student at NITRR',
    photo:'https://randomuser.me/api/portraits/women/43.jpg',
    text:"It's looking badass It's looking good It's looking good It's looking good It's looking good It's looking good It's looking good It's looking good ",
},
    {
        name:'Raunit Verma',
        position:'Student at NITRR',
        photo:'https://randomuser.me/api/portraits/women/43.jpg',
        text:"It's looking good It's looking good It's looking good It's looking good It's looking good It's looking good It's looking good ",
},]

let idxx=0;

function updateTestimonial(){
  const{name,position,photo,text}=  testimonials[idxx]
  testimonial.innerHTML=text
  userImage.src=photo
  userName.innerHTML=name
  role.innerHTML=position
  idxx++
  if(idxx>=testimonials.length){
      idxx=0
  }
  
}
//for button clicks
function updateTestimonial1(){
    const{name,position,photo,text}=  testimonials[idxx]
    testimonial.innerHTML=text
    userImage.src=photo
    userName.innerHTML=name
    role.innerText=position
    // if(idxx>=testimonials.length){
    //     idxx=0
    // }
    // if(idxx<0){
    //     idxx=testimonials.length
    // }
    
  }
updateTestimonial()
setInterval(() => {
    updateTestimonial()
}, 10000);

leftbtn.addEventListener('click',()=>{
   if(idxx==0){
       idxx=testimonials.length-1
       updateTestimonial1()
   }
   else{
       idxx--
       updateTestimonial1()
   }
  
    
})

rightbtn.addEventListener('click',()=>{
    idxx++
    if(idxx==testimonials.length){
        idxx=0
    }
    updateTestimonial1()
})