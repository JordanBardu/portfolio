import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

type ProjectCardProps = {
  title: string;
  url: string;
  description: string;
  color: string;
};

function ProjectCard({ title, description, color }: ProjectCardProps) {
  const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false);

  return (
    <div className="h-48 overflow-visible">
      <motion.div
        style={{ backgroundColor: color }}
        className="relative h-96 w-full rounded-t-lg flex justify-start items-end pl-4 pb-4 gap-4 cursor-pointer"
        initial={{ clipPath: 'inset(50% 0 0 0 round 8px 8px 0 0)' }}
        whileHover={{ clipPath: 'inset(0% 0 0 0 round 8px 8px 0 0)' }}
        onHoverEnd={() =>
          isDescriptionDisplayed && setIsDescriptionDisplayed(false)
        }
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <h1>{title}</h1>
        <button
          onClick={() => setIsDescriptionDisplayed((prev) => !prev)}
          className="hover:cursor-pointer"
        >
          <i className="fa-solid fa-circle-info" />
        </button>

        <AnimatePresence>
          {isDescriptionDisplayed && (
            <motion.div
              className="absolute inset-0 bg-neutral-800/90 text-white flex justify-center items-center p-6 rounded-t-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {description}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
