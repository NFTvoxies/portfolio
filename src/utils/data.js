import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";

export const projectExperience = [
  {
    name: "Conception de site Web",
    projects: 12,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Conception d'application mobile",
    projects: 5,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Identité de marque",
    projects: 10,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [`
Je suis un développeur passionné avec une expérience diversifiée dans la conception de sites web, le développement d'applications mobiles et la création d'identités de marque. Actuellement, je travaille chez IDEO Factory en tant que Développeur Full Stack, où je suis responsable du développement et de la maintenance des applications web. Mon parcours en freelance m'a permis de développer des compétences solides en WordPress et en design UI/UX.

Mes valeurs fondamentales incluent le professionnalisme, la créativité et l'engagement envers la qualité. Je suis motivé par la résolution de problèmes complexes et la création de solutions numériques innovantes qui répondent aux besoins des clients.

Je suis convaincu que la collaboration et la communication sont essentielles pour réussir dans le domaine du développement logiciel.`];


export const workExp = [
  {
    place: "IDEO Factory",
    tenure: "Sep 2023 - Présent",
    role: "Développeur Full Stack",
    detail:
      "Responsable du développement et de la maintenance des applications web, tant du côté front-end que back-end. Collaborer avec les designers et autres développeurs pour créer des solutions logicielles conviviales et efficaces. Implémenter et optimiser les structures de base de données, écrire du code côté serveur et assurer une intégration transparente entre les composants front-end et back-end.",
  },
  {
    place: "Freelance",
    tenure: "Sep 2022 - Août 2023",
    role: "Développeur WordPress",
    detail:
      "Développer et personnaliser des thèmes WordPress. Collaborer avec les clients pour comprendre leurs besoins et mettre en œuvre des solutions en utilisant les meilleures pratiques de WordPress. Dépanner et déboguer les problèmes de WordPress, et assurer la sécurité et les performances des sites WordPress.",
  },
  {
    place: "Freelance",
    tenure: "Août 2020 - Sep 2022",
    role: "Designer UI/UX",
    detail:
      "Un designer visuel conçoit pour une variété de plateformes, ce qui peut inclure des sites web, des jeux, des films, des kiosques et des appareils portables. En bref, ils créent les concepts visuels et les mises en page pour les produits numériques.",
  },
  {
    place: "Freelance",
    tenure: "Août 2020 - Sep 2022",
    role: "Designer UI/UX",
    detail:
      "Un designer visuel conçoit pour une variété de plateformes, ce qui peut inclure des sites web, des jeux, des films, des kiosques et des appareils portables. En bref, ils créent les concepts visuels et les mises en page pour les produits numériques.",
  }
];

export const comments = [
  {
    name: "John Doe",
    post: "Développeur Web",
    comment:
      "Travailler avec vous a été une excellente expérience ! Votre expertise en développement web m'a aidé à créer un site web magnifique pour mon entreprise. Le design est moderne et la fonctionnalité est impeccable. Merci pour votre professionnalisme et votre dévouement !",
    img: "./people1.png",
  },
  {
    name: "Jane Smith",
    post: "Designer Graphique",
    comment:
      "Je suis extrêmement satisfait des services de conception graphique que vous avez fournis. Les visuels que vous avez créés représentent parfaitement ma marque et ont reçu des retours positifs de mes clients. Votre attention aux détails et votre créativité sont remarquables. Hautement recommandé !",
    img: "./people2.png",
  },
  {
    name: "Mike Johnson",
    post: "Développeur d'applications mobiles",
    comment:
      "L'application mobile que vous avez développée pour mon entreprise a dépassé mes attentes. Elle est conviviale, rapide et possède toutes les fonctionnalités que j'avais demandées. Vos compétences techniques et vos capacités de résolution de problèmes sont impressionnantes. Merci d'avoir livré un produit de haute qualité !",
    img: "./people3.png",
  },
  {
    name: "Sarah Thompson",
    post: "Designer UI/UX",
    comment:
      "Je suis ravi du travail de conception UI/UX que vous avez réalisé pour mon projet. L'interface est intuitive et visuellement attrayante, améliorant l'expérience utilisateur globale. Votre attention aux détails et votre compréhension du comportement des utilisateurs sont remarquables. Excellent travail !",
    img: "./people4.png",
  },
  {
    name: "David Wilson",
    post: "Ingénieur Logiciel",
    comment:
      "Vos services de développement logiciel ont été exceptionnels. Les applications que vous avez construites sont robustes, évolutives et performantes. Vos compétences en codage et votre capacité à résoudre des problèmes complexes sont vraiment impressionnantes. Merci de fournir des solutions de premier ordre !",
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
