import content from './section_content.json';
import { motion } from 'motion/react';
import reactIconSvg from '../../assets/svg/react-icon.svg';
import typescriptIconSvg from '../../assets/svg/ts-icon.svg';
import tailwindIconSvg from '../../assets/svg/tailwind-icon.svg';
import ExternalLinks from '../../components/ExternalLinks';
import PrimaryButton from '../../components/PrimaryButton';
import { PrimaryButtonSizeEnum } from '../../components/PrimaryButton/types.ts';
import ContactForm from '../../components/ContactForm';
import useIsSmallScreen from '../../hooks/useIsSmallScreen.ts';
import { SCREEN_SIZE } from '../../hooks/types.ts';
import StaticSection from '../../components/StaticSection';
import DraggableSection from '../../components/AnimatedSection';

function Home() {
  const isMobile = useIsSmallScreen(SCREEN_SIZE.LG);

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
      <div className="relative min-h-screen w-full flex lg:flex-row flex-col gap-16 lg:gap-0 items-center">
        <div className="flex flex-row justify-center items-center gap-12 mt-12 lg:mt-0">
          <h1 className="inline-block font-[Area] lg:text-8xl text-5xl lg:ml-8 text-center">
            <span className="bg-gradient-to-r from-[#c40c0c] to-[#ff6500] bg-clip-text text-transparent">
              Jordan
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#c40c0c] to-[#ff6500] bg-clip-text text-transparent lg:ml-32">
              Bardu
            </span>
          </h1>
          <div className="hidden lg:flex lg:flex-row lg:gap-[4px]">
            <div className="h-42 w-[2px] bg-white" />
            <div className="h-42 w-[2px] bg-white" />
            <div className="h-42 w-[2px] bg-white" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start ml-6">
          <motion.p
            className="lg:text-7xl text-2xl font-semibold font-[Nunito]"
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
              className={isMobile ? 'h-12 w-12' : 'h-16 w-16'}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: 'easeInOut' }}
            />
            <motion.img
              src={typescriptIconSvg}
              alt=""
              className={isMobile ? 'h-8 w-8' : 'h-10 w-10'}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: 'easeInOut' }}
            />
            <motion.img
              src={tailwindIconSvg}
              alt=""
              className={isMobile ? 'h-12 w-12' : 'h-16 w-16'}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: 'easeInOut' }}
            />
          </div>
        </div>

        <article className="absolute lg:bottom-8 lg:left-8 bottom-48">
          <ExternalLinks />
        </article>
        {!isMobile && (
          <div className="fixed bottom-8 right-8">
            <PrimaryButton
              icon="fa-arrow-down"
              onClick={handleArrowClick}
              iconSize={PrimaryButtonSizeEnum.LARGE}
            />
          </div>
        )}
        <div className="lg:fixed lg:right-44 lg:bottom-8 flex items-center justify-center">
          <PrimaryButton
            icon="fa-pen"
            content={'ME CONTACTER'}
            buttonSize={
              isMobile
                ? PrimaryButtonSizeEnum.SMALL
                : PrimaryButtonSizeEnum.LARGE
            }
            textSize={
              isMobile
                ? PrimaryButtonSizeEnum.SMALL
                : PrimaryButtonSizeEnum.LARGE
            }
            iconSize={
              isMobile
                ? PrimaryButtonSizeEnum.SMALL
                : PrimaryButtonSizeEnum.MEDIUM
            }
            onClick={handleContactClick}
          />
        </div>
      </div>

      <div id="home-sections" className="flex flex-col items-center w-full">
        {content.sections.map((section, index) =>
          isMobile ? (
            <StaticSection key={index} section={section} />
          ) : (
            <DraggableSection key={index} section={section} index={index} />
          ),
        )}
      </div>
      <ContactForm />
    </div>
  );
}

export default Home;
