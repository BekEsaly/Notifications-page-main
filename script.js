const markAll=document.querySelector('.mark-all');
 const unmarked=document.querySelectorAll('.unmarked');
 const notificationBox=document.querySelectorAll('.notification-box');
 const counter=document.querySelector('.counter');
 
markAll.addEventListener('click', ()=> {
    unmarked.forEach((e)=>{
     e.classList.remove('unmarked');
     
    })
    counter.innerHTML=0;
});

var clicked;
let i = unmarked.length;
notificationBox.forEach((box,n)=>{
     box.addEventListener('click', ()=>{
          clicked=n;
           if (i>0) {
            unmarked[clicked].classList.remove('unmarked');
             i--;
             counter.innerHTML=i;
           }else{
             counter.innerHTML=0;
           }
})
}) 
