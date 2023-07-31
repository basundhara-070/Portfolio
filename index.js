const projects=document.querySelector(".projectimages");
const project=document.querySelectorAll(".project");
const prevbutn=document.querySelector(".prev"); 
const nextbutn=document.querySelector(".next");
let imgindex=0;
project[imgindex].classList.add('active');
prevbutn.addEventListener('click', previmg);
nextbutn.addEventListener('click', nextimg);
function previmg(){
project[imgindex].classList.remove('active');
imgindex=(imgindex==0)?4:imgindex-1;
project[imgindex].classList.add('active');
// projects.style.transform= 'translateX(${imgindex*100}%)' ;
}
function nextimg(){
    project[imgindex].classList.remove('active');
    imgindex=(imgindex==project.length-1)?0:imgindex+1;
    project[imgindex].classList.add('active');
    // projects.style.transform= 'translateX(-${imgindex*100}%)' ;
}