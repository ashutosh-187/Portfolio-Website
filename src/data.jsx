import {
  FaHome,
  FaUser,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/ochi.jpg';
import Work2 from './assets/Educity.jpg';
import Work3 from './assets/sidcup.jpg';
import Work4 from './assets/code.jpg';
import Work5 from './assets/flight_Booking.jpg';
import Work6 from './assets/flightStatus.jpg';
import Work7 from './assets/currencyConvert.jpg';
import Work8 from './assets/chatBot.jpg';
import Work9 from './assets/keyboard.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaCode className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ashutosh',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Tiwari',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 5,
    title: 'Highest Education : ',
    description: 'B.Tech',
  },

  {
    id: 6,
    title: 'Langages : ',
    description: 'English, Hindi',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 6386175405',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'work.withashutosh1807@gmail.com',
  }
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Mar 2024 - Aug 2024',
    title: 'Software Developer Intern <span> DigiVista InfoTech </span>',
    desc: '',
  },

  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2023',
    title: 'Technical Writter <span> WebCom Designs </span>',
    desc: '',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - 2024',
    title: 'Bachelor of Technology (BTech) <span> Noida Institute of Engineering and Technology </span>',
    desc: 'Computer Science',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019 - 2020',
    title: 'XII <span> Woodbine Gardenia School </span>',
    desc: 'Physics, Chemistry, Maths',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017 - 2018',
    title: 'X <span> Woodbine Gardenia School </span>',
    desc: '',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Ochi Designs Website Clone',
    details: [
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'React.JS, TailwindCSS, Locomotive Scrolls',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live Demo',
        desc: 'https://ochi-clone-iota.vercel.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Edusity Website Clone',
    details: [
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'React.JS, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live Demo',
        desc: 'https://edusity-weld.vercel.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Sidcup Family Golf Website Clone',
    details: [
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'HTML5, CSS, GSAP',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live Demo',
        desc: 'https://master--sidcup-family-clone-187.netlify.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Code editor',
    details: [
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'React.JS, Prism.JS, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live Demo',
        desc: 'https://master--code-editor-187.netlify.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Flight Booking System',
    details: [
      {
        icon: <FiUser />,
        title: 'Associated with : ',
        desc: 'DigiVista Infotech',
      },
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'Nest.JS, React.JS, MongoDB',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Realtime Flight Status',
    details: [
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'MongoDB, Express.JS, React.JS, Node.JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Source Code',
        desc: 'https://github.com/ashutosh-187/Flight_Status',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'Currency Convertor',
    details: [
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'React.JS, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live Demo',
        desc: 'https://taupe-chebakia-e43ede.netlify.app/',
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: 'Chatbot Powered By OpenAI',
    details: [
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'Python, OpenAI module',
      },
      {
        icon: <FiExternalLink />,
        title: 'Source Code',
        desc: 'https://github.com/ashutosh-187/Machine-Learning-Expert-Powered-by-ChatGPT',
      },
    ],
  },

  {
    id: 9,
    img: Work9,
    title: 'Gesture Based Keyboard',
    details: [
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'Python, OpenCV, MediaPipe'
      },
      {
        icon: <FiExternalLink />,
        title: 'Source Code',
        desc: 'https://github.com/ashutosh-187/Gesture-Based-Keyboard',
      },
    ],
  },

];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
