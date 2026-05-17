import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import useIsSmallScreen from '../../hooks/useIsSmallScreen.ts';
import { SCREEN_SIZE } from '../../hooks/types.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faLink,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { STACK_ICONS_MAP } from './stackIconsMap.ts';

type ProjectSections = {
  contexte: string;
  objectifs: string;
  competences: string;
  resultats: string;
  ameliorations: string;
};

type ProjectCardProps = {
  title: string;
  url: string;
  githubUrl: string;
  thumbnail?: string;
  stack?: string[];
  sections: ProjectSections;
};

function ProjectCard({
  title,
  url,
  githubUrl,
  sections,
  thumbnail,
  stack = [],
}: ProjectCardProps) {
  const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false);
  const isMobile = useIsSmallScreen(SCREEN_SIZE.LG);

  const SECTION_LABELS: Record<keyof ProjectSections, string> = {
    contexte: 'Contexte',
    objectifs: 'Objectifs',
    competences: 'Compétences développées',
    resultats: 'Résultats',
    ameliorations: "Perspectives d'amélioration",
  };

  const thumbnailUrl = thumbnail
    ? new URL(
        `../../assets/images/projects_thumb/${thumbnail}`,
        import.meta.url,
      ).href
    : undefined;

  const Modal = (
    <AnimatePresence>
      {isDescriptionDisplayed && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDescriptionDisplayed(false)}
          />
          <motion.div
            className={`fixed z-50 border border-white/40 backdrop-blur-xl bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-white rounded-2xl p-6 flex flex-col gap-4 ${isMobile ? 'left-4 right-4 bottom-28' : 'left-1/4 right-1/4 top-1/2 -translate-y-1/2'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">{title}</h2>
              <button onClick={() => setIsDescriptionDisplayed(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[60vh]">
              {(Object.keys(sections) as Array<keyof ProjectSections>).map(
                (key) => (
                  <div key={key}>
                    <h3 className="font-bold font-[Nunito] text-sm uppercase tracking-wide text-text mb-1">
                      {SECTION_LABELS[key]}
                    </h3>
                    <p className="font-[Nunito] text-sm">{sections[key]}</p>
                  </div>
                ),
              )}
            </div>
            <div className="flex flex-row gap-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="border p-2 rounded-lg hover:bg-white/50 transition-colors duration-300 font-[Nunito]"
              >
                <FontAwesomeIcon icon={faLink} className="mr-2" />
                Lien
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border p-2 rounded-lg hover:bg-white/50 transition-colors duration-300 font-[Nunito]"
              >
                <FontAwesomeIcon icon={faLink} className="mr-2" />
                GitHub
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  const mobileCardContent = (
    <div className="relative h-56 w-[80%] rounded-lg flex justify-start items-end pl-4 pb-4 gap-4 cursor-pointer overflow-hidden">
      {thumbnailUrl && (
        <>
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </>
      )}
      <div className="z-10 flex flex-row items-center gap-4">
        <h1 className="text-lg">{title}</h1>
        <button
          onClick={() => setIsDescriptionDisplayed((prev) => !prev)}
          aria-label="Voir les détails"
          className="cursor-pointer"
        >
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
      </div>
      {Modal}
    </div>
  );

  const desktopCardContent = (
    <div className="relative h-96 w-full rounded-lg flex justify-start items-end p-4 gap-4 cursor-pointer overflow-hidden">
      {thumbnailUrl && (
        <>
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </>
      )}
      <div className="z-10 flex justify-between w-full">
        <div className="flex flex-row items-center gap-4">
          <h1 className="text-xl font-[Nunito] font-bold">{title}</h1>
          <button
            onClick={() => setIsDescriptionDisplayed((prev) => !prev)}
            aria-label="Voir les détails"
            className="cursor-pointer"
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </button>
        </div>
        <div className="flex flex-row gap-3">
          {stack.map((tech) => {
            const icon = STACK_ICONS_MAP[tech];
            return icon ? (
              <FontAwesomeIcon key={tech} icon={icon} className="text-4xl" />
            ) : null;
          })}
        </div>
      </div>
      {Modal}
    </div>
  );

  return (
    <div
      className={`${isMobile ? 'flex justify-center items-center' : 'h-96'}`}
    >
      {isMobile ? mobileCardContent : desktopCardContent}
    </div>
  );
}

export default ProjectCard;
