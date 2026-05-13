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

type ProjectCardProps = {
  title: string;
  url: string;
  description: string;
  githubUrl: string;
  thumbnail?: string;
};

function ProjectCard({
  title,
  description,
  url,
  githubUrl,
  thumbnail,
}: ProjectCardProps) {
  const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false);
  const isMobile = useIsSmallScreen(SCREEN_SIZE.LG);

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
            className="fixed left-4 right-4 bottom-28 z-50 bg-neutral-800 text-white rounded-xl p-6 flex flex-col gap-4"
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
            <p className="font-[Nunito]">{description}</p>
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
    <div
      className="relative h-96 w-full rounded-lg flex justify-start items-end pl-4 pb-4 gap-4 cursor-pointer overflow-hidden"
      onMouseLeave={() => setIsDescriptionDisplayed(false)}
    >
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
      <AnimatePresence>
        {isDescriptionDisplayed && (
          <motion.div
            className="absolute inset-0 bg-neutral-800/90 text-white flex flex-col justify-center items-center gap-4 p-6 rounded-lg z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="font-[Nunito] font-semibold">{description}</p>
            <div className="flex flex-row justify-end gap-4 w-full h-full items-end">
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
        )}
      </AnimatePresence>
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
