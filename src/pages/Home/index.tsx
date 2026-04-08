import content from "./section_content.json";
import { motion, useDragControls } from "motion/react";
import reactIconSvg from "../../assets/svg/react-icon.svg";
import typescriptIconSvg from "../../assets/svg/ts-icon.svg";
import tailwindIconSvg from "../../assets/svg/tailwind-icon.svg";
import ExternalLinks from "../../components/ExternalLinks";
import PrimaryButton from "../../components/PrimaryButton";
import { PrimaryButtonSizeEnum } from "../../components/PrimaryButton/types.ts";

function Home() {
  const handleArrowClick = () => {
    const target = document.getElementById("home-sections");
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleContactClick = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative min-h-screen w-full flex flex-row items-center">
        <div className="flex flex-row justify-center items-center gap-12">
          <h1 className="bg-gradient-to-b from-text to-primary inline-block text-transparent bg-clip-text font-[Edo] text-8xl">
            Jordan <br />
            <span className="ml-32">Bardu</span>
          </h1>
          <div className="h-42 w-[2px] bg-white" />
        </div>

        <div className="flex flex-col ml-6">
          <motion.p
            className="text-7xl font-semibold font-[Nunito]"
            initial={{ y: 30 }}
            animate={{ y: -10 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
          >
            Développeur{" "}
            <span className="bg-[linear-gradient(90deg,#C40C0C_0%,#FF6500_46%,#F6CE71_100%)] bg-clip-text text-transparent px-2">
              Front-end
            </span>
            <motion.span
              className="bg-gradient-to-r from-primary via-secondary to-text bg-clip-text text-transparent"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
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
              transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
            />
            <motion.img
              src={typescriptIconSvg}
              alt=""
              className="h-10 w-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: "easeInOut" }}
            />
            <motion.img
              src={tailwindIconSvg}
              alt=""
              className="h-16 w-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: "easeInOut" }}
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
                ease: "easeInOut",
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

      <section className="max-w-xl mx-auto p-6 mt-96 mb-24" id="contact-form">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <form className="flex flex-col gap-4 w-full">
          <div className="flex w-full justify-center gap-6">
            <div className="flex flex-col w-[48%]">
              <label htmlFor="firstname" className="text-sm mb-1">
                Prénom
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="Jordan"
                className="rounded-md bg-transparent border border-white/20 px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex flex-col w-[48%]">
              <label htmlFor="lastname" className="text-sm mb-1">
                Nom
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Bardu"
                className="rounded-md bg-transparent border border-white/20 px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="flex flex-col w-full justify-center">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@exemple.com"
              className="rounded-md bg-transparent border border-white/20 px-4 py-2 focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-col w-full justify-center">
            <label htmlFor="message" className="text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Votre message..."
              className="rounded-md bg-transparent border border-white/20 px-4 py-2 resize-none focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 self-start px-6 py-2 rounded-md bg-primary text-white font-medium hover:bg-secondary transition cursor-pointer"
          >
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}

export default Home;
