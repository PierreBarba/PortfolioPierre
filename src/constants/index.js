import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    postgres,
    git,
    aeo,
    starbucks,
    pokeapi,
    metric,
    ruby,
    space,
    book,
    budget,
    rubyRails,
    jest,
    webP,
    adobe,
    MySql,
    fusion1
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Designer Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "jest",
      icon: jest,
    },
    {
      name: "WebPack",
      icon: webP,
    },
    {
      name: "Adobe",
      icon: adobe,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "ruby",
      icon: ruby,
    },
    {
      name: "rubyRails",
      icon: rubyRails,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "postgres",
      icon: postgres,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MySql",
      icon: MySql,
    }
  ];
  
  const experiences = [
    {
      title: "Full stack",
      company_name: "Microverse",
      icon: starbucks,
      iconBg: "linear-gradient(115deg, #ffffff, #C0C0C0, #ffffff, #C0C0C0, #ffffff, #C0C0C0)",
      date: "October 2022 - may 2023",
      points: [
        "Throughout my journey, I have dedicated over 1300 hours to mastering algorithms, data structures, and full-stack development. Simultaneously, I have been actively involved in developing projects utilizing Ruby, Rails, JavaScript, React, and Redux. In addition to technical expertise, I have honed my skills in remote pair programming using GitHub, adhering to industry-standard git-flow, and participating in daily standups to effectively communicate and collaborate with international remote developers.",
      ],
    },
    {
      title: "Mentor",
      company_name: "Microverse",
      icon: starbucks,
      iconBg: "linear-gradient(115deg, #C0C0C0,#ffffff, #C0C0C0, #ffffff, #C0C0C0, #ffffff)",
      date: " Feb 2022 - may 2023",
      points: [
        " Mentored three junior web developers weekly, providing technical support through code reviews using Zoom and Slack as primary tools.",
        " Proposed improvements to code organization to improve code quality and overall performance by 10%.",
        "Provided advice and tips on maintaining motivation, resulting in the successful longevity of six students in the program."
      ],
    },
    {
      title: "Associate",
      company_name: "American Eagle Outfitters",
      icon: aeo,
      iconBg: "linear-gradient(115deg, #ffffff, #C0C0C0, #ffffff, #C0C0C0, #ffffff, #C0C0C0)",
      date: "Nov 2016  - Jul 2020",
      points: [
        "Successfully resolved over fifty claims, resulting in a 95% customer satisfaction rate.",
        "Attended the national training for the development and strategy of stand design and won the internal design contest."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I had the pleasure of working with Pierre Barba on a coding project, and I can confidently say that he is an outstanding coding partner. He is not only reliable, but also highly professional in his approach to work.Pierre consistently demonstrated his ability to write clean, efficient code, and he was always willing to go above and beyond to ensure the success of our project. His attention to detail and strong problem-solving skills were invaluable to our team.Overall, I highly recommend Pierre as a coding partner. He is a pleasure to work with, and I am confident that he will bring the same level of professionalism and expertise to any coding project he undertakes.",
      name: "Prangon Ghose",
      designation: "Software Developer",
      company: "Microverse",
      image: "https://avatars.githubusercontent.com/u/64170307?v=4",
    },
    {
      testimonial:
        "Pierre is an exceptional coding partner whose technical skills are matched only by his passion for coding. He is a creative problem-solver who consistently delivers high-quality work, and his dedication to his craft is truly impressive. In the time that we've worked together, I have come to appreciate Pierre's ability to collaborate effectively, communicate clearly, and adapt to new challenges. Pierre's knowledge and experience in coding make him an asset to any team, and I would highly recommend him for any coding collaboration.",
      name: "Paul Saenz Sucre",
      designation: "Software Developer",
      company: "Microverse",
      image: "https://avatars.githubusercontent.com/u/10566417?v=4",
    },
    {
      testimonial:
        "I worked with Pierre for almost 1 year and he always was available to listen and help others, contributing to the personal improvement of his coworkers. He compromises with his personal growth, facing challenges with strength and confidence and always looking for technical knowledge improvement and reach his professional goals.",
      name: "Cilfone Gabriel",
      designation: "Software Developer",
      company: "Microverse",
      image: "https://avatars.githubusercontent.com/u/79432268?v=4",
    },
  ];
  
  const projects = [
    {
      name: "mv-pokeapp",
      description:
        "This is a Single Page WebApp (API based) that show information about your favorite Pokemon, you can Like, Comment and even Reserve it for your next tournament. buildt with Javascript, Html & Css",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "PokeApi",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: pokeapi,
      source_code_link: "https://github.com/PierreBarba/mv-pokeapp",
    },
    {
      name: "Metric",
      description:
        "A Single Page Application (SPA) created using React library. This web application can perform the search for the countries of Europe and give some of their details. Code is written following JSX syntax. The web application is maintained using Redux store. API calls are made using Redux Async toolkit createAsyncThunk.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: metric,
      source_code_link: "https://github.com/PierreBarba/capstone-metrics",
    },
    {
      name: "Ruby on Rails React",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "ruby",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fusion1,
      source_code_link: "https://github.com/PierreBarba/Ruby-on-Rails-React",
    },
    {
      name: "space-traveller-s-hub",
      description:
        "A simple website to view rockets, missions, and dragons from SpaceX API built with React-Redux. Users can reserve any rocket or dragon and can join any mission, their joined and reserved items are shown in the profile section. tools: REACT-REDUX.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: space,
      source_code_link: "https://github.com/PierreBarba/space-traveller-s-hub",
    },
    {
      name: "Bookstore",
      description:
        "This is an app made with react and redux using an API that is used to add your favorite books, like the chapter you are in you can also remove them from the list.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: book,
      source_code_link: "https://github.com/PierreBarba/bookstore",
    },
    {
      name: "BudgetApp",
      description:
        "Spend Tracker is an app that helps users track their expenses with ease. It offers data syncing across devices, password protection, and customizable features, which can assist individuals in gaining insights into their spending habits and managing their budget efficiently. tools: react, redux, js, css.",
      tags: [
        {
          name: "react-redux",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: budget,
      source_code_link: "https://github.com/PierreBarba/capstoneBudgetApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };