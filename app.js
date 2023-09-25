let anchortags=document.getElementsByTagName('a');
let hamburger=document.getElementsByClassName('hamburger');
let headersession=document.getElementsByTagName('header');
let backgroundcolor=document.getElementsByClassName('background-color');
let description=document.querySelector('.description');
let newbatch=document.querySelector('.newbatch');
let section2=document.getElementsByClassName('section-2');
let section3=document.getElementsByClassName('section-3');
let section4=document.getElementsByClassName('section-4');
let section6=document.getElementsByClassName('section-6');
let section7=document.getElementsByClassName('section-7');

let footer=document.getElementsByTagName('footer')
console.log(footer)

let navelements=document.querySelector('.navelements');

console.log(description)
console.log(newbatch)

document.addEventListener('DOMContentLoaded', function() {
    if(document.body.offsetWidth<710){
        
        navelements.style.display='none';
    }
    backgroundcolor[0].style.display='none'

  });

for(let anchor of anchortags){
    anchor.addEventListener('click',function(e){
     e.preventDefault();
   

    })

   
}




hamburger[0].addEventListener('click',function(){
    let a=  backgroundcolor[0].style.display==='none';

    if(a){

        backgroundcolor[0].style.display='block';
        description.style.opacity='0';
        newbatch.style.opacity='0';
        document.body.style.height='100vh';
        navelements.style.display='flex';
        
       
        document.body.height="50%"
        section2[0].style.display="none";
        section3[0].style.display="none";
        section4[0].style.display="none";
        section6[0].style.display="none";
        section7[0].style.display="none";
        footer[0].style.display="none"

        // footer[0].style.width='630px'
        // document.body.style.background='black';
        

    }

    else{
        backgroundcolor[0].style.display='none'
        description.style.opacity='1';
        newbatch.style.opacity='1';
        navelements.style.display='none'
      

        section2[0].style.display="flex";
        section3[0].style.display="block";

        section4[0].style.display="block";
        section6[0].style.display="block";
        section7[0].style.display="block";

        footer[0].style.display="block"








    }
    
})