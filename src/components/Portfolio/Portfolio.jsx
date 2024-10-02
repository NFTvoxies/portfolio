import React, { useState } from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projets = [
    {
      id: 1,
      image: "./promptopia.png",
      titre: "Promptopia",
      lien: "https://promptopia-two-beta-10.vercel.app/",
      description: "Une plateforme de partage de prompts d'IA permettant aux utilisateurs de découvrir et partager des prompts créatifs",
      contexte: "Projet personnel visant à explorer les possibilités des LLMs et à créer une communauté d'utilisateurs d'IA",
      cadre: "Projet personnel développé pour enrichir mon portfolio",
      role: "Développeur Full Stack",
      taches: [
        "Conception de l'architecture de l'application",
        "Développement du frontend avec Next.js",
        "Implémentation de l'authentification",
        "Création d'une API RESTful"
      ],
      technologies: ["Next.js", "React", "MongoDB", "NextAuth", "Tailwind CSS"],
      etapes: [
        "Analyse des besoins et conception UX/UI",
        "Développement du MVP",
        "Tests utilisateurs",
        "Déploiement sur Vercel"
      ],
      date: "2024"
    },
    {
      id: 2,
      image: "./MacBook Pro 16-inch Space Black Front label.png",
      titre: "EduFinance",
      description: "Application de gestion financière destinée aux étudiants",
      contexte: "Projet développé pour aider les étudiants à mieux gérer leur budget",
      cadre: "Projet dans le cadre d'une activité professionnelle",
      role: "Lead Developer",
      taches: [
        "Gestion de l'équipe de développement",
        "Développement des fonctionnalités principales",
        "Integration des APIs bancaires"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      etapes: [
        "Étude de marché",
        "Prototypage",
        "Développement itératif",
        "Tests d'intégration"
      ],
      date: "2023"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className={css.projectCard} onClick={() => setSelectedProject(project)}>
      <div className={css.imageContainer}>
        <img src={project.image} alt={project.titre} />
      </div>
      <div className={css.cardContent}>
        <h3>{project.titre}</h3>
        <p className={css.description}>{project.description}</p>
        <div className={css.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={css.techBadge}>{tech}</span>
          ))}
        </div>
        <div className={css.projectMeta}>
          <span className={css.date}>{project.date}</span>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className={css.modal} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={project.image} alt={project.titre} />
        
        <div className={css.projectDetails}>
          <h2>{project.titre}</h2>
          
          <section>
            <h3>Description et Contexte</h3>
            <p>{project.description}</p>
            <p>{project.contexte}</p>
          </section>

          <section>
            <h3>Cadre du Projet</h3>
            <p>{project.cadre}</p>
          </section>

          <section>
            <h3>Rôle et Tâches</h3>
            <p><strong>Rôle :</strong> {project.role}</p>
            <ul>
              {project.taches.map((tache, index) => (
                <li key={index}>{tache}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Technologies et Outils</h3>
            <div className={css.technologies}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={css.techBadge}>{tech}</span>
              ))}
            </div>
          </section>

          <section>
            <h3>Étapes de Réalisation</h3>
            <ul>
              {project.etapes.map((etape, index) => (
                <li key={index}>{etape}</li>
              ))}
            </ul>
          </section>

          {project.lien && (
            <a 
              href={project.lien} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={css.viewButton}
            >
              Voir le Projet
            </a>
          )}
        </div>

        <button className={css.closeButton} onClick={onClose}>×</button>
      </div>
    </div>
  );

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth ${css.container}`}>
        <motion.div variants={textVariant(0.4)} className={css.heading}>
          <span className="primaryText">Mes Derniers Travaux</span>
          <p>Solution parfaite pour une expérience numérique</p>
        </motion.div>

        <div className={css.showCase}>
          {projets.map((projet) => (
            <motion.div
              key={projet.id}
              variants={fadeIn("up", "tween", 0.5, 0.6)}
            >
              <ProjectCard project={projet} />
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;