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