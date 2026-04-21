import content from './section_content.json';
import { motion, useDragControls } from 'motion/react';
import reactIconSvg from '../../assets/svg/react-icon.svg';
import typescriptIconSvg from '../../assets/svg/ts-icon.svg';
import tailwindIconSvg from '../../assets/svg/tailwind-icon.svg';
import ExternalLinks from '../../components/ExternalLinks';
import PrimaryButton from '../../components/PrimaryButton';
import { PrimaryButtonSizeEnum } from '../../components/PrimaryButton/types.ts';
import ContactForm from '../../components/ContactForm';

function Home() {
  const handleArrowClick = () => {
    const target = document.getElementById('home-sections');
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  const handleContactClick = () => {
    document
      .getElementById('contact-form')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative min-h-screen w-full flex flex-row items-center">
        <div className="flex flex-row justify-center items-center gap-12">
          {/*Titre principal: Nom, Prénom*/}
          <h1 className="inline-block font-[Area] text-8xl ml-8 text-center">
            <span className="bg-gradient-to-r from-[#c40c0c] to-[#ff6500] bg-clip-text text-transparent">
              Jordan
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#c40c0c] to-[#ff6500] bg-clip-text text-transparent ml-32">
              Bardu
            </span>
          </h1>
          {/*Les trois lignes entre le nom et le reste*/}
          <div className="flex flex-row gap-[4px]">
            <div className="h-42 w-[2px] bg-white" />
            <div className="h-42 w-[2px] bg-white" />
            <div className="h-42 w-[2px] bg-white" />
          </div>
        </div>
        {/*Titre Développeur + icônes animées*/}
        <div className="flex flex-col ml-6">
          <motion.p
            className="text-7xl font-semibold font-[Nunito]"
            initial={{ y: 30 }}
            animate={{ y: -10 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }}
          >
            Développeur{' '}
            <span className="bg-[linear-gradient(90deg,#C40C0C_0%,#FF6500_46%,#F6CE71_100%)] bg-clip-text text-transparent px-2">
              Front-end
            </span>
            <motion.span
              className="bg-gradient-to-r from-primary via-secondary to-text bg-clip-text text-transparent"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              .
            </motion.span>
          </motion.p>

          <div className="flex flex-row items-center gap-2">
            <motion.img
              src={reactIconSvg}
              alt=""
              className="h-16 w-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: 'easeInOut' }}
            />
            <motion.img
              src={typescriptIconSvg}
              alt=""
              className="h-10 w-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: 'easeInOut' }}
            />
            <motion.img
              src={tailwindIconSvg}
              alt=""
              className="h-16 w-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: 'easeInOut' }}
            />
          </div>
        </div>

        <article className="absolute bottom-8 left-8">
          <ExternalLinks />
        </article>

        <div className="absolute right-8">
          <PrimaryButton
            icon="fa-pen"
            content="ME CONTACTER"
            buttonSize={PrimaryButtonSizeEnum.LARGE}
            textSize={PrimaryButtonSizeEnum.LARGE}
            iconSize={PrimaryButtonSizeEnum.MEDIUM}
            onClick={handleContactClick}
          />
        </div>
        <div className="fixed bottom-8 right-8">
          <PrimaryButton
            icon="fa-arrow-down"
            onClick={handleArrowClick}
            iconSize={PrimaryButtonSizeEnum.LARGE}
          />
        </div>
      </div>

      <div id="home-sections" className="flex flex-col items-center w-full">
        {content.sections.map((section, index) => {
          const dragControls = useDragControls();
          const floatX = (index % 2 === 0 ? 1 : -1) * (10 + index * 4);
          const floatY = (index % 3 === 0 ? -1 : 1) * (8 + index * 3);

          return (
            <motion.section
              key={index}
              drag
              dragControls={dragControls}
              dragListener={false}
              dragMomentum={false}
              className="flex relative flex-col items-center w-[80%] p-12 mt-36 border overflow-hidden rounded-2xl border-white/40 select-none backdrop-blur-xl bg-white/3 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
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
        })}
      </div>
      <ContactForm />
    </div>
  );
}

export default Home;
