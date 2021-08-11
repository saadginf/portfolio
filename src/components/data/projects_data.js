import web1 from "../../assets/projects_images/web1.png";
import mobile3 from "../../assets/projects_images/mobile3.png";
import web2 from "../../assets/projects_images/web2.png";
import portfolio from "../../assets/projects_images/web3.png";
import new_year from "../../assets/projects_images/web4.png";
import color_classification from "../../assets/projects_images/web5.png";
import blinking from "../../assets/projects_images/shell1.png";
import mobile1 from "../../assets/projects_images/mobile1.png";
import mobile2 from "../../assets/projects_images/mobile2.png";

const data_projects = [
  {
    name: "Pocket Manager",
    image: mobile1,

    github_url: "https://github.com/saadginf/noumangerMobile",
    category: ["mobile", "full-stack"],
  },

  {
    name: "Medical App",
    image: mobile2,

    github_url: "https://github.com/saadginf/edukus-mobile",
    category: ["mobile"],
  },

  {
    name: "iOrdo",
    image: mobile3,

    github_url: "https://github.com/saadginf/iordo",
    category: ["node", "socket.io", "react"],
  },

  {
    name: "Bank App",
    image: web1,
    deployed_url: "https://youthful-wozniak-183714.netlify.app/",
    github_url: "https://github.com/saadginf/BusniesTemplate",
    category: ["react"],
  },

  {
    name: "Painter Gallery",
    image: web2,

    category: ["react"],
  },

  {
    name: "Ecom Admin",
    image: portfolio,
    deployed_url: "https://glacial-lake-60698.herokuapp.com/",
    category: ["nodejs", "react", "fullstack"],
  },

  {
    name: "Business Gallery",
    image: new_year,
    deployed_url: "https://pssolutions-8f1e9.web.app/",
    category: ["nodejs", "react", "fullstack"],
  },

  {
    name: "Event Manager",
    image: color_classification,

    category: ["spring", "react", "fullstack"],
  },

  {
    name: "DB Backup",
    image: blinking,

    category: ["shell"],
  },
];

export default data_projects;
