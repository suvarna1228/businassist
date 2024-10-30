let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

document.querySelector('.slider-next').addEventListener('click', ()=>{
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide+1)%totalSlides;
    slides[currentSlide].classList.add('active');
});
document.querySelector('.slider-prev').addEventListener('click', ()=>{
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide-1+totalSlides)%totalSlides;
    slides[currentSlide].classList.add('active');
});

const faqItems= document.querySelectorAll('.faq-item ');
faqItems.forEach(item =>{
    const qustion = item.querySelector('.faq-question');
     qustion.addEventListener('click',()=>{
        item.classList.toggle('open');
        faqItems.forEach(otherItem =>{
            if(otherItem !== item){
                otherItem.classList.remove('open');
            }
        });
     });
}); 