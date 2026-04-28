import { motion, useDragControls } from 'motion/react';

type Props = {
  section: { title: string; description: string };
  index: number;
};

function DraggableSection({ section, index }: Props) {
  const dragControls = useDragControls();
  const floatX = (index % 2 === 0 ? 1 : -1) * (10 + index * 4);
  const floatY = (index % 3 === 0 ? -1 : 1) * (8 + index * 3);

  const sectionClasses =
    'flex relative flex-col items-center w-[80%] p-12 mt-36 border overflow-hidden rounded-2xl border-white/40 select-none backdrop-blur-xl bg-white/3 shadow-[0_8px_32px_rgba(0,0,0,0.25)]';

  return (
    <motion.section
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      className={sectionClasses}
      animate={{
        x: [0, floatX, -floatX * 0.4, floatX * 0.2, 0],
        y: [0, floatY, -floatY * 0.35, floatY * 0.25, 0],
      }}
      transition={{
        duration: 18 + index * 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className="bg-white/40 h-4 w-full absolute top-0 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => dragControls.start(e)}
      />
      <div className="text-center w-full">
        <h2 className="text-9xl font-bold mb-4 w-full text-outline opacity-70 flex justify-start">
          {section.title}
        </h2>
        <p className="text-lg opacity-90 font-[Nunito] leading-relaxed">
          {section.description}
        </p>
      </div>
    </motion.section>
  );
}

export default DraggableSection;
