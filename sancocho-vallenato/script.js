// Sancocho Vallenato — content only; layout/behavior lives in /components/story-grid
const stories = [
    {
        title: "El Chicharrón",
        subtitle: "Omar Geles",
        content: "Esta personificación en la que se le atribuyen negativamente, a una ya bastante dañina, piel de porcino frita a altas y caldedas temperaturas las faenas y pormenores de una compleja y nociva relación, qué chicharrón diría.",
        image: 'imagenes-artistas-transparent/omargelesblanco2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=dBA1hMNptjs?si=lm2G54arifkqK81Q'
    },
    {
        title: "La Yuca y La Tajada",
        subtitle: "Ivan Villazon y Saul Lallemand",
        content: "De autoría de Romualdo Brito, esta inexplicable y tubercular tonada que canta al amor titulada como dos nuestros acompañamientos de almidón preferidos.",
        image: 'imagenes-artistas-transparent/villalol.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=ropdwqJtrQ4'
    },
    {
        title: "El Comelón",
        subtitle: "Diomedes Diaz",
        content: "Rotulado en Fiesta Vallenata Vol. 20, esta tonada nos regala la eterna metáfora continuada de un malherido amante amanerando a su musa con su suicidio de manera voraz.",
        image: 'imagenes-artistas-transparent/diomedesblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=GA2OYoq3gNo'
    },
    {
        title: "Invitación Parrandera",
        subtitle: "Tomas Alfonso Zuleta & Nicolas Elias Mendoza",
        content: "Una invitación parrandera a celebrar con alegría los momentos de la vida caribeña.",
        image: 'imagenes-artistas-transparent/invitacion-parrandera.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=m4eJLjDMWe8'
    },
    {
        title: "El Hambre del Liceo",
        subtitle: "Carlos Vives",
        content: "En autoría del ya ido maestro Escalona nos refiere a los periplos y abyectos menesteres alimenticios a los cuales se carea un estudiante de internado de la época.",
        image: 'imagenes-artistas-transparent/el-hambre-del-liceo.svg',
        youtubeUrl: 'https://www.youtube.com/watch?v=0XIqsybJg5o'
    },
    {
        title: "Navidad",
        subtitle: "El Binomio de Oro",
        content: "De la apertura del lado B del rotulado 227 20928 del sello Costeño lo tenemos esta inolvidable oda de los contrastes navideños en nuestros albores de la mesa familiar, una tristeza que la desigualdad sea el pan diario de estas poesias.",
        image: 'imagenes-artistas-transparent/navidad.svg',
        youtubeUrl: 'https://www.youtube.com/watch?v=t0rTDZNWIyU'
    },
    {
        title: "Las Frutas del Amor",
        subtitle: "Los Corraleros de Majagual",
        content: "Tomado del LP de Fuentes titulado Volvimos, Los Corraleros nos invitan a llevar con ellos su carreta en la cuál estiban las famosas frutas del amor o de la pasión, un colorín digno de la región.",
        image: 'imagenes-artistas-transparent/corralerosblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=vvfI2gOqOLw'
    },
    {
        title: "Cumbia Campesina",
        subtitle: "Andrés Landero",
        content: "Ritmo ancestral que mezcla la herencia africana, española e indígena. La cumbia es la voz del pueblo, la música que resuena en las calles de Colombia.",
        image: 'imagenes-artistas-transparent/landerocolorblanco2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=GQ9Gje94tgQ'
    },
    {
        title: "El Limoncito",
        subtitle: "Diomedes Díaz",
        content: "Con su característico estilo satírico, Diomedes Díaz juega con los símbolos y metáforas de nuestra región, haciéndonos reír de nuestras propias realidades.",
        image: 'imagenes-artistas-transparent/diomedesdosblanco.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=X3NS47rVvVE'
    },
    {
        title: "La Empanadita",
        subtitle: "Calixto Ochoa",
        content: "La empanada como expresión de identidad y tradición. Un símbolo de la resistencia cultural de nuestro pueblo caribeño.",
        image: 'imagenes-artistas-transparent/calixto2.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=50mDGC34g_M'
    }
];

StoryGrid.mount({
    list: '#storiesGrid',
    parallax: '.sg-intro-image img',
    stories
});
