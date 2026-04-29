import reactLogoIcon from '../../assets/svg/react-icon.svg';
import tailwindLogoIcon from '../../assets/svg/tailwind-icon.svg';
import tsLogoIcon from '../../assets/svg/ts-icon.svg';

function Skills() {
  const titleClasses = 'font-[Area] text-5xl w-full';
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center gap-24 pt-24">
        <div className="flex flex-col gap-6 max-w-[80%] w-full">
          <div className="flex justify-center items-center p-6 border-y border-white">
            <h1 className={titleClasses}>LANGAGES & FRAMEWORKS</h1>
          </div>
          <ul className="flex flex-row gap-6">
            <img src={reactLogoIcon} alt="" />
            <img src={tailwindLogoIcon} alt="" />
            <img src={tsLogoIcon} alt="" />
          </ul>
        </div>
        <div className="flex flex-col gap-6 max-w-[80%] w-full">
          <div className="flex justify-center items-center p-6 border-y border-white">
            <h1 className={titleClasses}>REFERENCEMENT & ACCESSIBILITE</h1>
          </div>
          <ul className="flex flex-row gap-6">
            <li>ARIA</li>
            <li>Lighthouse</li>
            <li>SEO technique</li>
            <li>OpenGraph</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 max-w-[80%] w-full">
          <div className="flex justify-center items-center p-6 border-y border-white">
            <h1 className={titleClasses}>AUTRES OUTILS</h1>
          </div>
          <ul className="flex flex-row gap-6">
            <li>Git</li>
            <li>Vite</li>
            <li>React Testing Library</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 max-w-[80%] w-full">
          <div className="flex justify-center items-center p-6 border-y border-white">
            <h1 className={titleClasses}>SOFT SKILLS</h1>
          </div>
          <ul className="flex flex-row gap-6">
            <li>Méthode Agile</li>
            <li>Travail d'équipe</li>
            <li>Adaptabilité</li>
            <li>Autonomie</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
