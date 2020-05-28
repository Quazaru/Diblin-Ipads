import '../css/styles.scss';
import 'normalize.css';

const aboutAccordion = document.querySelectorAll('.about__button');




const accordionToggle = () => {
    aboutAccordion.classList.toggle(".about__accordion-active");
}






aboutAccordion.forEach( (item, i) => {
    aboutAccordion[i].addEventListener('click', accordionToggle);
    console.log(item, i , aboutAccordion);
})


