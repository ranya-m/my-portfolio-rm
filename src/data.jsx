// general pictures imports
import profile from "./assets/img/profile-square.jpg";

// general skills icons imports
import {TbCode} from 'react-icons/tb';
import {MdOutlineScience} from 'react-icons/md';
import {TbMessageLanguage} from 'react-icons/tb';
import {MdDraw} from 'react-icons/md';
import {FaSellsy} from 'react-icons/fa';

// coding skills icons imports
import {AiOutlineHtml5} from 'react-icons/ai';
import {TbBrandCss3} from 'react-icons/tb';
import {TbBrandJavascript} from 'react-icons/tb';
import {TbBrandReactNative} from 'react-icons/tb';
import {TbBrandPhp} from 'react-icons/tb';
import {IoLogoLaravel} from 'react-icons/io5';
import {HiMagnifyingGlassCircle} from 'react-icons/hi2';

// projects screenshots imports
import pro1 from './assets/img/dummy.jpg';
import pro2 from './assets/img/dummy.jpg';
import pro3 from './assets/img/dummy.jpg';
import pro4 from './assets/img/dummy.jpg';
import pro5 from './assets/img/dummy.jpg';
import pro6 from './assets/img/dummy.jpg';
import pro7 from './assets/img/dummy.jpg';
import pro8 from './assets/img/dummy.jpg';
import pro9 from './assets/img/dummy.jpg';

// contact icons
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FaGithub} from 'react-icons/fa';
import {FaDiscord} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {BsFillChatRightDotsFill} from 'react-icons/bs';


// ******* DATA LAYOUT ********** //

export const navLinks = [
    {
      id: 1,
      text: "Home",
      href: "#home",
    },
    {
      id: 2,
      text: "About",
      href: "#about",
    },
    {
      id: 3,
      text: "Projects",
      href: "#projects",
    },
    {
      id: 4,
      text: "Contact",
      href: "#contact",
    },
  ];

  export const generalSkills = [
    {
      id: 1,
      icon: <TbCode />,
      title: "Programming",
      text: "My Full Stack Development training at 3WA Academy allowed me to sharpen logical and coding skills in different languages - e.g CSS, Javascript,Php - and their frameworks. It's also crucial for me to constantly update my knowledge to recent developments.",
    },
    {
      id: 2,
      icon: <MdOutlineScience/>,
      title: "Biology Science",
      text: "My college studies in Biology and Health Sciences allowed me to develop a critical thinking mindset. It also introduced me to the fields of Scientific Data Management and Bio-Informatics, particularly Python, which cultivated my interest for programming further more.",
    },
    {
      id: 3,
      icon: <FaSellsy />,
      title: "Digital Marketing & E-commerce",
      text: "I had the opportunity to work with entrepreneurs in marketing their products/services on Social Media, which works tightly with web devlopment for showcase websites & e-commerce sites.",
    }, 
    {
      id: 4,
      icon: <TbMessageLanguage />,
      title: "Language learning",
      text: "I enjoy learning foreign languages and am always looking to broaden my ability to access different cultures of the world. This certainly played a part in my curiosity for programming languages and the human to machine communication.",
    },
    {
      id: 5,
      icon: <MdDraw />,
      title: "Art",
      text: "I love to draw and paint using contrasting and complementary colors and shapes. I strive to represent that in my work, be it for pure front end design and/or brand identity and illustrations.",
    },
    {
      id: 6,
      icon: <HiMagnifyingGlassCircle/>,
      title: "Want to know more?",
      text: "Thank you for reading me up until now ! click here to check out my resume for more informations. To look at some snippets of my coding projects, scroll down below.",
      href: "https://ranya-m.github.io/CV-RANYA-M-master/",
    },
  ];

  

  export const codingSkills = [
    {
      id: 1,
      icon: <AiOutlineHtml5 />,
      title: "Html",
      icolor: "myorange",
    },
    {
      id: 2,
      icon: <TbBrandCss3 />,
      title: "Css",
      icolor: "myblue",
    },
    {
      id: 3,
      icon: <TbBrandJavascript />,
      title: "Javascript",
      icolor: "yellow",
    },
    {
      id: 4,
      icon: <TbBrandReactNative />,
      title: "React",
      icolor: "mylightblue",
    },
    {
      id: 5,
      icon: <IoLogoLaravel />,
      title: "Laravel",
      icolor: "myred",
    },
        {
      id: 6,
      icon: <TbBrandPhp />,
      title: "Php",
      icolor: "mylavander",
    },
  ];


  export const projectCategory = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Html-Css", value: "Html-Css" },
    { id: 3, name: "Javascript", value: "Javascript" },
    { id: 4, name: "React", value: "React" },
  ];

  export const projects = [
    {
      id: 1,
      image: pro1,
      value: "Html-Css",
    },
    {
      id: 2,
      image: pro2,
      value: "Javascript",
    },
    {
      id: 3,
      image: pro3,
      value: "React",
    },
    {
      id: 4,
      image: pro4,
      value: "Html-Css",
    },
    {
      id: 5,
      image: pro5,
      value: "Javascript",
    },
    {
      id: 6,
      image: pro6,
      value: "React",
    },
    {
      id: 7,
      image: pro7,
      value: "Html-Css",
    },
    {
        id: 8,
        image: pro8,
        value: "Javascript",
      },
      {
        id: 9,
        image: pro9,
        value: "React",
      },
  ];


  export const contacts = [
    {
      id: 1,
      icon: <MdEmail />,
      text: "ranya.developer.contact@gmail.com",
    },
    {
      id: 2,
      icon: <HiOutlineLocationMarker />,
      text: "Based in Rabat, Morocco. Available for work mobility.",
    },
    {
      id: 3,
      icon: <BsFillChatRightDotsFill/>,
      text: "Find me on Social Media too !",
    },
  ];

  export const socials = [
    {
        id: 1,
        icon: <FaLinkedin />,
        text: "",
      },
      {
        id: 2,
        icon: <FaDiscord />,
        text: "",
      },
      {
        id: 3,
        icon: <FaGithub/>,
        text: "",
      },
  ];