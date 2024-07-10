import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 12,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 5,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 10,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "IDEO Factory",
    tenure: "Sep 2023 - Present",
    role: "Full Stack Developer",
    detail:
      "Responsible for developing and maintaining both the front-end and back-end of web applications. Collaborate with designers and other developers to create user-friendly and efficient software solutions. Implement and optimize database structures, write server-side code, and ensure seamless integration between the front-end and back-end components.",
  },
  {
    place: "Freelancer",
    tenure: "Sep 2022 - Aug 2023",
    role: "Wordpress Developer",
    detail:
      "Develop and customize WordPress themes. Collaborate with clients to understand their requirements and implement solutions using WordPress best practices. Troubleshoot and debug WordPress issues, and ensure the security and performance of WordPress websites.",
  },
  {
    place: "Freelancer",
    tenure: "Aug 2020 - Sep 2022",
    role: "UI/UX Designer",
    detail:
      "A visual designer design for a variety of platforms, which may include websites, games, movies, kiosks, and wearables. In short, they create the visual concepts and layouts for digital products.",
  },
  {
    place: "Freelancer",
    tenure: "Aug 2020 - Sep 2022",
    role: "UI/UX Designer",
    detail:
      "A visual designer design for a variety of platforms, which may include websites, games, movies, kiosks, and wearables. In short, they create the visual concepts and layouts for digital products.",
  }
];

export const comments = [
  {
    name: "John Doe",
    post: "Web Developer",
    comment:
      "Working with you was a great experience! Your expertise in web development helped me create a stunning website for my business. The design is modern and the functionality is flawless. Thank you for your professionalism and dedication!",
    img: "./people1.png",
  },
  {
    name: "Jane Smith",
    post: "Graphic Designer",
    comment:
      "I am extremely satisfied with the graphic design services you provided. The visuals you created perfectly represent my brand and have received positive feedback from my clients. Your attention to detail and creativity are commendable. Highly recommended!",
    img: "./people2.png",
  },
  {
    name: "Mike Johnson",
    post: "Mobile App Developer",
    comment:
      "The mobile app you developed for my business exceeded my expectations. It is user-friendly, fast, and has all the features I requested. Your technical skills and problem-solving abilities are impressive. Thank you for delivering a high-quality product!",
    img: "./people3.png",
  },
  {
    name: "Sarah Thompson",
    post: "UI/UX Designer",
    comment:
      "I am thrilled with the UI/UX design work you did for my project. The interface is intuitive and visually appealing, enhancing the overall user experience. Your attention to detail and understanding of user behavior are remarkable. Great job!",
    img: "./people4.png",
  },
  {
    name: "David Wilson",
    post: "Software Engineer",
    comment:
      "Your software development services have been exceptional. The applications you built are robust, scalable, and performant. Your coding skills and ability to solve complex problems are truly impressive. Thank you for delivering top-notch solutions!",
    img: "./people5.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
