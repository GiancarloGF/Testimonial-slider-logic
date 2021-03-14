const container = document.querySelector('.container');
const subContainer = document.querySelector('.sub__container');
const containerText= document.querySelector('.container__text');
const containerImg=document.querySelector('.container__img');
const btnLeft= document.querySelector('.btn-left');
const btnRight= document.querySelector('.btn-right');
const nameModel=document.querySelector('.nameModel');
const title=document.querySelector('.title');
const paraf= document.querySelector('.paraf');


// Crearemos un objeto para guardar informacion de cada personaje.

let personajes={
      numerOfCharacters: 2,

      1:{
            name: 'Tanya Sinclair',
            title: 'Ux Engineer',
            testimonial: '\“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.\ ”',
            urlImg:  "url('images/image-tanya.jpg')",
            
      },

      0:{
            name: 'John Tarkpor',
            title: 'Junior Front-end Developer',
            testimonial: '\“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\ ”',
            urlImg: "url('images/image-john.jpg')",
            
      }
}

let currentIndex=0;

function goRight(){
      btnLeft.disabled=false;
      currentIndex++;
      containerImg.style.backgroundImage= personajes[currentIndex].urlImg;
      paraf.textContent=personajes[currentIndex].testimonial;
      nameModel.textContent=personajes[currentIndex].name;
      title.textContent=personajes[currentIndex].title;
      if (currentIndex===personajes.numerOfCharacters-1) {
            btnRight.disabled=true;
      }

};

function goLeft(){
      btnRight.disabled=false;
      currentIndex--;
      containerImg.style.backgroundImage= personajes[currentIndex].urlImg;
      paraf.textContent=personajes[currentIndex].testimonial;
      nameModel.textContent=personajes[currentIndex].name;
      title.textContent=personajes[currentIndex].title;
      if (currentIndex===0) {
            btnLeft.disabled=true;
      }
};







function init(){
      btnRight.addEventListener('click', 
                  goRight);


      btnLeft.addEventListener('click',goLeft);


}

init();