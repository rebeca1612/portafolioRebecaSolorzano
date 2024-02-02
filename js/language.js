//declaracion de clases usando constantes
const langEl = document.querySelector('.langWrap');

//el a que hay aqui es porque tiene lenguage en HTML
const link = document.querySelectorAll('a');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
const bottom1menu = document.querySelector('.bottom1menu');



//TEXTO PRINCIPAL DE MENU

const niceToMeetyou = document.querySelector('.niceToMeetyou');
const text1Section2 = document.querySelector('.text1Section2');

const section3_1 = document.querySelector('.section3_1');
const section3_2 = document.querySelector('.section3_2');
const section3_3 = document.querySelector('.section3_3');
const section3_4 = document.querySelector('.section3_4');
const section3_5 = document.querySelector('.section3_5');

const card1Txt1 = document.querySelector('.card1Txt1');
const card1Txt2 = document.querySelector('.card1Txt2');
const card1Txt3 = document.querySelector('.card1Txt3');
const card1Txt4 = document.querySelector('.card1Txt4');

const card2Txt1 = document.querySelector('.card2Txt1');
const card2Txt2 = document.querySelector('.card2Txt2');
const card2Txt3 = document.querySelector('.card2Txt3');
const card2Txt4 = document.querySelector('.card2Txt4');

const card3Txt1 = document.querySelector('.card3Txt1');
const card3Txt2 = document.querySelector('.card3Txt2');
const card3Txt3 = document.querySelector('.card3Txt3');
const card3Txt4 = document.querySelector('.card3Txt4');
const card3Txt5 = document.querySelector('.card3Txt5');
const card3Txt7 = document.querySelector('.card3Txt7');
const card3Txt8 = document.querySelector('.card3Txt8');
const card3Txt9 = document.querySelector('.card3Txt9');

const section4Txt1 = document.querySelector('.section4Txt1');
const section4Txt2 = document.querySelector('.section4Txt2');
const section4Txt3 = document.querySelector('.section4Txt3');
const section4Txt4 = document.querySelector('.section4Txt4');

const section5txt1 = document.querySelector('.section5txt1');
const section5txt2 = document.querySelector('.section5txt2');
const section5txt3 = document.querySelector('.section5txt3');
const section5txt3_2 = document.querySelector('.section5txt3_2');

const section5txt4 = document.querySelector('.section5txt4');
const section5txt5 = document.querySelector('.section5txt5');
const section5txt6 = document.querySelector('.section5txt6');
const section5txt7 = document.querySelector('.section5txt7');

//FOOTER

const Landingtxt1 = document.querySelector('.Landingtxt1');
const Landingtxt2 = document.querySelector('.Landingtxt2');
const section5Txt2 = document.querySelector('.section5Txt2');

const footertxt1 = document.querySelector('.footertxt1');
const footertxt2 = document.querySelector('.footertxt2');
const footertxt3 = document.querySelector('.footertxt3');


link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');


        //textContent es una propiedad JS para obtener el contenido de texto de un determinado elemento o nodo.

        nav1.textContent = changeLanguage[attr].nav1;
        nav2.textContent = changeLanguage[attr].nav2;
        nav3.textContent = changeLanguage[attr].nav3;
        bottom1menu.textContent = changeLanguage[attr].bottom1menu;
        niceToMeetyou.textContent = changeLanguage[attr].niceToMeetyou;
        text1Section2.textContent = changeLanguage[attr].text1Section2;

        section3_1.textContent = changeLanguage[attr].section3_1;
        section3_2.textContent = changeLanguage[attr].section3_2;
        section3_3.textContent = changeLanguage[attr].section3_3;
        section3_4.textContent = changeLanguage[attr].section3_4;
        section3_5.textContent = changeLanguage[attr].section3_5;

        card1Txt1.textContent = changeLanguage[attr].card1Txt1;
        card1Txt2.textContent = changeLanguage[attr].card1Txt2;
        card1Txt3.textContent = changeLanguage[attr].card1Txt3;
        card1Txt4.textContent = changeLanguage[attr].card1Txt4;

        card2Txt1.textContent = changeLanguage[attr].card2Txt1;
        card2Txt2.textContent = changeLanguage[attr].card2Txt2;
        card2Txt3.textContent = changeLanguage[attr].card2Txt3;
        card2Txt4.textContent = changeLanguage[attr].card2Txt4;

        card3Txt1.textContent = changeLanguage[attr].card3Txt1;
        card3Txt2.textContent = changeLanguage[attr].card3Txt2;
        card3Txt3.textContent = changeLanguage[attr].card3Txt3;
        card3Txt4.textContent = changeLanguage[attr].card3Txt4;
        card3Txt5.textContent = changeLanguage[attr].card3Txt5;
        card3Txt7.textContent = changeLanguage[attr].card3Txt7;
        card3Txt8.textContent = changeLanguage[attr].card3Txt8;
        card3Txt9.textContent = changeLanguage[attr].card3Txt9;
        
        section4Txt1.textContent = changeLanguage[attr].section4Txt1;
        section4Txt2.textContent = changeLanguage[attr].section4Txt2;
        section4Txt3.textContent = changeLanguage[attr].section4Txt3;
        section4Txt4.textContent = changeLanguage[attr].section4Txt4;

        section5txt1.textContent = changeLanguage[attr].section5txt1;
        section5txt2.textContent = changeLanguage[attr].section5txt2;
        section5txt3.textContent = changeLanguage[attr].section5txt3;
        section5txt3_2.textContent = changeLanguage[attr].section5txt3_2;

        section5txt4.textContent = changeLanguage[attr].section5txt4;
        section5txt5.textContent = changeLanguage[attr].section5txt5;
        section5txt6.textContent = changeLanguage[attr].section5txt6;
        section5txt7.textContent = changeLanguage[attr].section5txt7;
       

        Landingtxt1.textContent = changeLanguage[attr].Landingtxt1;
        Landingtxt2.textContent = changeLanguage[attr].Landingtxt2;
        section5Txt2.textContent = changeLanguage[attr].section5Txt2;

        //FOOTER

        footertxt1.textContent = changeLanguage[attr].footertxt1;
        footertxt2.textContent = changeLanguage[attr].footertxt2;
        footertxt3.textContent = changeLanguage[attr].footertxt3;
        

    });
});

let changeLanguage = {

    "espanish":
    {
        //menu

        "nav1": "Proyectos",

        "nav2": "Sobre mi",
        "nav3": "Contacto",
        "bottom1menu": "Trabajos",

        //inicio de pagina

        "niceToMeetyou": "mucho gusto Rebeca",
        "text1Section2": "Una apasionada del diseño y desarrollo web, especializada en el front-end. Mi enfoque se centra en crear experiencias web atractivas y funcionales.Combino mi habilidad en diseño gráfico con sólidos conocimientos en HTML, CSS y JavaScript para dar vida a proyectos web impactantes. ¡Echa un vistazo a mi portafolio!",


        "section3_1": "Estudios",
        "section3_2": "Habilidades",
        "section3_3": "Técnicos",
        "section3_4": "superiores",
        "section3_5": "Cursos",

        "card1Txt1": "Técnicos superiores",
        "card1Txt2": "Ver más",
        "card1Txt3": "Diseño y Desarrollo de pagina web",
        "card1Txt4": "Fotógrafo para la industria gráfica",

        "card2Txt1": "Cursos",
        "card2Txt2": "Controlador de la calidad del software",
        "card2Txt3": "Marketing digital para emprendedores",
        "card2Txt4": "Técnico medio en dibujo arquitectonico",

        "card3Txt1": "Habilidades",
        "card3Txt2": "Idioma",
        "card3Txt3": "Habilidades",
        "card3Txt4": "Conocimientos de diseño web",
        "card3Txt5": "Control de versiones",
        "card3Txt7": "Gestión de proyectos y trabajo en equipo",
        "card3Txt8": "Idioma",
        "card3Txt9": "Ingles B1",

        "section4Txt1": "Programas",
        "section4Txt2": "Técnicos",
        "section4Txt3": "superiores",
        "section4Txt4": "Cursos",

        "section5txt1": "Proyectos de",
        "section5txt2": "Apasionantes",
        "section5txt3": "Dentro de mi portafolio, te presento una colección de proyectos de página completa que destacan mi habilidad y experiencia en el desarrollo web.Estos proyectos representan un enfoque detallado en la creación de sitios web que abarcan todo el espectro de diseño,funcionalidad y usabilidad.",


        "section5txt4": "Perfumeria",
        "section5txt5": "Veterinaria",
        "section5txt6": "MemoGame",
        "section5txt7": "La Bombita",

        "Landingtxt1": "Proyectos de",
        "Landingtxt2": "Apasionantes",
        "section5txt3_2": "En esta sección, te presentaré dos ejemplos de mis creaciones One Page, cada una con su propia personalidad y estilo único.Cada página es un testimonio de mi pasión por la narración visual y la navegación fluida.",

        //footer

        "footertxt1": "Contáctame",
        "footertxt2": "Estoy emocionada de conectarme contigo!",
        "footertxt3": "Si tienes preguntas o comentarios, estaré encantado de escucharte.",

        
        


    },
    "english":
    {
        //menu

        "nav1": "Projects",
        "nav2": "About Me",
        "nav3": "Contact",
        "bottom1menu": "Works",

        //inicio de pagina

        "niceToMeetyou": "nice to meet you",

        "text1Section2": "Passionate about web design and development, specializing in front-end. My focus is on creating engaging and functional web experiences. I combine my graphic design skills with strong knowledge of HTML, CSS, and JavaScript to bring impactful web projects to life. Check out my portfolio!",

        "section3_1": "Studies",
        "section3_2": "Skills",
        "section3_3": "Technical",
        "section3_4": "Advanced",
        "section3_5": "Courses",

        //cards

        "card1Txt1": "Higher Technicians",
        "card1Txt2": "See more",
        "card1Txt3": "Web Design and Development",
        "card1Txt4": "Photographer for the graphic industry",

        "card2Txt1": "Courses",
        "card2Txt2": "Software Quality Controller",
        "card2Txt3": "Digital Marketing for Entrepreneurs",
        "card2Txt4": "Intermediate Technical Drawing",

        "card3Txt1": "Skills",
        "card3Txt2": "Language",
        "card3Txt3": "Skills",
        "card3Txt4": "Web Design Knowledge",
        "card3Txt5": "Version Control",
        "card3Txt7": "Project Management and Teamwork",
        "card3Txt8": "Language",
        "card3Txt9": "English B1",

        "section4Txt1": "Programs",
        "section4Txt2": "Technicians",
        "section4Txt3": "Higher",
        "section4Txt4": "Courses",

        //projects

        "section5txt1": "Exciting",
        "section5txt2": "Projects",
        "section5txt3": "Within my portfolio, I present a collection of full-page projects that showcase my ability and experience in web development. These projects represent a detailed approach to creating websites that span the entire spectrum of design, functionality, and usability.",

        "section5txt4": "Perfumery",
        "section5txt5": "Veterinary",
        "section5txt6": "MemoGame",
        "section5txt7": "La Bombita",

        "Landingtxt1": "Exciting",
        "Landingtxt2": "Projects",
        "section5txt3_2": "In this section, I will present two examples of my One Page creations, each with its own personality and unique style. Each page is a testament to my passion for visual storytelling and smooth navigation.",

        //footer

        "footertxt1": "Contact Me",
        "footertxt2": "I'm excited to connect with you!",
        "footertxt3": "If you have any questions or comments, I'll be happy to hear from you."

        
        
    }
}