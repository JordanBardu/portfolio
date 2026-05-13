import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import useIsSmallScreen from '../../hooks/useIsSmallScreen.ts';
import { SCREEN_SIZE } from '../../hooks/types.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLink } from '@fortawesome/free-solid-svg-icons';

type ProjectCardProps = {
  title: string;
  url: string;
  description: string;
  githubUrl: string;
  defaultOpen?: boolean;
  thumbnail?: string;
};

function ProjectCard({
  title,
  description,
  url,
  githubUrl,
  thumbnail,
  defaultOpen = false,
}: ProjectCardProps) {
  const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false);
  const isMobile = useIsSmallScreen(SCREEN_SIZE.LG);

  const thumbnailUrl = thumbnail
    ? new URL(
        `../../assets/images/projects_thumb/${thumbnail}`,
        import.meta.url,
      ).href
    : undefined;

  const desktopCardContent = (
    <motion.div
      className="relative h-96 w-full rounded-t-lg flex justify-start items-end pl-4 pb-4 gap-4 cursor-pointer"
      initial={{
        clipPath: defaultOpen
          ? 'inset(0% 0 0 0 round 8px 8px 0 0)'
          : 'inset(50% 0 0 0 round 8px 8px 0 0)',
      }}
      whileHover={{ clipPath: 'inset(0% 0 0 0 round 8px 8px 0 0)' }}
      onHoverEnd={() =>
        isDescriptionDisplayed && setIsDescriptionDisplayed(false)
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {thumbnailUrl && (
        <>
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </>
      )}
      <div className="z-10 flex flex-row items-center gap-4">
        <h1 className="text-lg">{title}</h1>
        <button
          onClick={() => setIsDescriptionDisplayed((prev) => !prev)}
          className="hover:cursor-pointer"
        >
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
      </div>

      <AnimatePresence>
        {isDescriptionDisplayed && (
          <motion.div
            className="absolute inset-0 bg-neutral-800/90 text-white flex flex-col justify-center items-center gap-4 p-6 rounded-t-lg z-10"
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
    </motion.div>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </>
      )}

      <h1 className="z-10">{title}</h1>
      <button
        onClick={() => setIsDescriptionDisplayed((prev) => !prev)}
        className="hover:cursor-pointer z-10"
      >
        <i className="fa-solid fa-circle-info" />
      </button>
      {isDescriptionDisplayed && (
        <div className="absolute inset-0 bg-neutral-800/90 text-white flex flex-col justify-center items-center gap-4 p-6 rounded-lg z-10">
          <p>{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 rounded-lg hover:bg-white/50 transition-colors duration-300 font-[Nunito]"
          >
            Lien <i className="fa-solid fa-link" />
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`h-48 overflow-visible ${isMobile ? 'flex justify-center items-center mt-12' : ''}`}
    >
      {isMobile ? mobileCardContent : desktopCardContent}
    </div>
  );
}

export default ProjectCard;
