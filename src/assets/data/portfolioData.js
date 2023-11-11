import portfolioImg01 from "../images/p10.jpg";
import portfolioImg02 from "../images/p8.jpg";
import portfolioImg03 from "../images/p11.jpg";
import portfolioImg05 from "../images/p6.jpg";
import portfolioImg04 from "../images/p9.jpg";
import portfolioImg06 from "../images/p7.jpg";



const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web design",
    title: "Personal Website",
    description:
      "A personal portfolio to describe more about myself and my projects.",
    technologies: ["React","html" ,"Tailwind css"],
    siteUrl: "https://valiverfernandes.vercel.app/",
    doc:"#",
  },
  
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Real Estate Management System",
    description:
      "A system to manage all the information related to farming.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    siteUrl: "https://github.com/Valivar/Real-Estate-mgmt-system",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web design",
    title: "Music Player",
    description:
      "In this project, I Create Music Player Using HTML, CSS, and JavaScript. I create a full-featured Music Player system with buttons for play, pause, advance, and back Using JavaScript Code.",
    technologies: ["html","css","javaScript"],
    
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "MAD",
    title: "Inventory Management System",
    description:
      "Inventory Management System in Android Studio is an app that manages and tracks our product stock and  control inventory, Technology used Android Studio..",
    technologies: ["Android Studio","Gradle", "Java", "html"],
    siteUrl: "https://github.com/Valivar/Inventory-Management-Android-app-master",
  },

  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "fsd",
    title: "Scribbler Blogging site",
    description:
      "This blogging website enables one to register a new user, create his/her posts, edit an already existing post, add comments on a post, like a post, etc.",
    technologies: ["html","css", "react", "MongoDB"," Bootstrap"],
    siteUrl: "https://github.com/Valivar/upgrade",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "fsd",
    title: "Online Notes Taking App",
    description:
      "simple to-do list application using JS frameworks and Database. Users should be able to add, edit, and delete tasks",
    technologies: ["html","css", "react"],
    siteUrl: "https://github.com/Valivar/ONLINE-NOTE-APP",
  },
  
];

export default portfolios;
