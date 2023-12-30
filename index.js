var display= document.querySelectorAll('.btn');
var open =document.querySelector('.login');
var loginfo= document.querySelector('.loginfo');
var box = document.querySelectorAll('.btn');
var box_show = document.querySelectorAll('.box');
var close1 =document.querySelector('.close');
var nav =document.querySelector('.nav-list');
var cancel =document.querySelector('.cancel');


open.addEventListener('click',()=>{
    

    loginfo.classList.toggle('open1');
})

// ============================= show language content===========================


// box.forEach((val,ind)=>{
// val.addEventListener('click',()=>{
//     box_show[ind].classList.toggle('active');
//     box[ind].classList.toggle('size');
// })
// });

box.forEach((val,ind)=>{
val.addEventListener('click',()=>{
    var i=ind;
    box_show[i++].classList.toggle('active');
   box[i++].classList.toggle('size');
})
});


close1.addEventListener('click',()=>{
    
    nav.classList.toggle('slide');
})

cancel.addEventListener('click',()=>{
    loginfo.classList.remove('open1');
})


// Get the modal



