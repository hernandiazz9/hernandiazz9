// --------------------------------------- Project List
import appointManager from '../Assets/projects/appointManager.png'
import coi from '../Assets/projects/coi.png'
import crudRedux from '../Assets/projects/crudRedux.png'
import mernTask from '../Assets/projects/mernTask.png'
import firebase from '../Assets/stackTech/firebase.png'
import mongo from '../Assets/stackTech/mongo.png'
import node from '../Assets/stackTech/node.png'
import postgres from '../Assets/stackTech/postgres.png'
import react from '../Assets/stackTech/react.png'
import redux from '../Assets/stackTech/redux.png'
import slack from '../Assets/stackTech/slack.png'
import trello from '../Assets/stackTech/trello.png'




export const ProjectList = [
  {
    img: coi,
    title: "Cirugía Ósea Instrumental",
    description:
      "Self-manageable web application so that the user can upload the products on their own",
    tech_stack: "Next js, GraphQL, DatoCMS",
    github_url: "https://github.com/hernandiazz9/coinext",
    demo_url: "https://coinext.vercel.app/",
  },
  {
    img: mernTask,
    title: "Project Manager",
    description:
      "web application for managing projects adding, editing and deleting tasks in each one",
    tech_stack: "MERN (mongodb, express, react js & node js)",
    github_url: "https://github.com/hernandiazz9/merntareasfrontend",
    demo_url: "https://merntaskhdd.netlify.app/",
  },
  
  
  {
    img: crudRedux,
    title: "Crud React Redux",
    description: "CRUD Rest Api for porduct control saving it in a db file",
    tech_stack: "React js, Redux, Axios ",
    github_url: "https://github.com/gurupawar/portfolio-react",
    demo_url: false
  },
  {
    img: appointManager,
    title: "Appointment Manager",
    description: "Created for educational purposes for managing patient appointments saving data in local storage",
    tech_stack: "Html, Css, React js",
    github_url: "https://github.com/hernandiazz9/administradorcitas.git",
    demo_url: "https://citashdd.netlify.app/",
  },
  
];


// --------------------------------------- Skills

export const stackList = [
   {
      img: "https://icongr.am/devicon/html5-original-wordmark.svg?size=40&color=currentColor",
      name: "HTML",
    },
  
  {
    img: "https://icongr.am/devicon/css3-original-wordmark.svg?size=40&color=currentColor",
    name: "CSS",
  },
  {
    img: "https://icongr.am/devicon/javascript-original.svg?size=40&color=currentColor",
    name: "JavaScript",
  },
  {
    img: "https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=40&color=currentColor",
    name: "Bootstrap",
  },
  {
    img: firebase,
    name: "Firebase",
  },
  // {
  //   img: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
  //   name: "Git",
  // },
  
  {
    img: postgres,
    name: "Postgres",
  },
  {
    img: slack,
    name: "Slack",
  },
  {
    img: trello,
    name: "Trello",
  },
  {
    img: mongo,
    name: "MongoDB",
  },
  {
    img: react,
    name: "React js",
  },
  {
    img: redux,
    name: "Redux",
  },
  {
    img: node,
    name: "Node js",
  },
];
