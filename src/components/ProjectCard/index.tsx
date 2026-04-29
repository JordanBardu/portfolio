import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

type ProjectCardProps = {
  title: string;
  url: string;
  description: string;
  color: string;
  defaultOpen?: boolean;
  thumbnail?: string;
};

function ProjectCard({
  title,
  description,
  color,
  url,
  thumbnail,
  defaultOpen = false,
}: ProjectCardProps) {
  const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false);

  const thumbnailUrl = thumbnail
    ? new URL(
        `../../assets/images/projects_thumb/${thumbnail}`,
        import.meta.url,
      ).href
    : undefined;

  console.log(url);

  return (
    <div className="h-48 overflow-visible">
      <motion.div
        style={{ backgroundColor: color }}
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
        <h1 className="z-10">{title}</h1>
        <button
          onClick={() => setIsDescriptionDisplayed((prev) => !prev)}
          className="hover:cursor-pointer z-10"
        >
          <i className="fa-solid fa-circle-info" />
        </button>

        <AnimatePresence>
          {isDescriptionDisplayed && (
            <motion.div
              className="absolute inset-0 bg-neutral-800/90 text-white flex flex-col justify-center items-center gap-4 p-6 rounded-t-lg z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p>{description}</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="border p-2 rounded-lg hover:bg-white/50 transition-colors duration-300 font-[Nunito]"
              >
                Lien <i className="fa-solid fa-link" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
