import { motion, useDragControls } from 'motion/react';

type Props = {
  section: { title: string; description: string };
};

function DraggableSection({ section }: Props) {
  const dragControls = useDragControls();

  const sectionClasses =
    'flex relative flex-col items-center w-[80%] p-12 mt-36 border overflow-hidden rounded-2xl border-white/40 select-none backdrop-blur-xl bg-white/3 shadow-[0_8px_32px_rgba(0,0,0,0.25)]';

  return (
    <motion.section
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      className={sectionClasses}
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
