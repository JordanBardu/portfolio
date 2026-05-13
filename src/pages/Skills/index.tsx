import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faTailwindCss,
  faTypescript,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faUniversalAccess,
  faUserTie,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import useIsSmallScreen from '../../hooks/useIsSmallScreen.ts';
import { SCREEN_SIZE } from '../../hooks/types.ts';

function Skills() {
  const titleClasses = 'font-[Nunito] font-bold lg:text-5xl text-xl w-full';
  const liClasses = 'lg:text-2xl text-lg font-[Nunito] opacity-90';
  const iconClasses = 'lg:text-3xl text-lg';
  const isMobile = useIsSmallScreen(SCREEN_SIZE.LG);
  return (
    <div className="w-full h-full mb-12">
      <div className="w-full h-full flex flex-col items-center justify-center lg:gap-24 gap-12 lg:pt-24 pt-12">
        <div className="flex flex-col gap-6 max-w-[80%] w-full">
          <div className="flex justify-center items-center lg:p-6 p-2 border-y border-white">
            <h1 className={titleClasses}>LANGAGES & FRAMEWORKS</h1>{' '}
            <FontAwesomeIcon icon={faCode} className={`${iconClasses}`} />
          </div>
          <ul className="flex flex-row lg:gap-4 gap-2">
            <FontAwesomeIcon icon={faReact} className="lg:text-7xl text-5xl" />
            <FontAwesomeIcon
              icon={faTypescript}
              className="lg:text-7xl text-5xl"
            />
            <FontAwesomeIcon
              icon={faTailwindCss}
              className="lg:text-7xl text-5xl"
            />
          </ul>
        </div>
        <div className="flex flex-col gap-6 max-w-[80%] w-full">
          <div className="flex justify-center items-center lg:p-6 p-2 border-y border-white">
            <h1 className={titleClasses}>REFERENCEMENT & ACCESSIBILITE</h1>
            <FontAwesomeIcon
              icon={faUniversalAccess}
              className={`${iconClasses}`}
            />
          </div>
          <ul className="flex lg:flex-row flex-col items-center gap-6">
            <li className={liClasses}>ARIA</li>
            {isMobile ? null : <li className={liClasses}>·</li>}
            <li className={liClasses}>Lighthouse</li>
            {isMobile ? null : <li className={liClasses}>·</li>}
            <li className={liClasses}>SEO technique</li>
            {isMobile ? null : <li className={liClasses}>·</li>}
            <li className={liClasses}>OpenGraph</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 max-w-[80%] w-full">
          <div className="flex justify-center items-center lg:p-6 p-2 border-y border-white">
            <h1 className={titleClasses}>AUTRES OUTILS</h1>
            <FontAwesomeIcon icon={faWrench} className={`${iconClasses}`} />
          </div>
          <ul className="flex lg:flex-row flex-col gap-6 items-center">
            <li className={liClasses}>Git</li>
            {isMobile ? null : <li className={liClasses}>·</li>}
            <li className={liClasses}>Vite</li>
            {isMobile ? null : <li className={liClasses}>·</li>}
            <li className={liClasses}>React Testing Library</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 max-w-[80%] w-full">
          <div className="flex justify-center items-center lg:p-6 p-2 border-y border-white">
            <h1 className={titleClasses}>SOFT KILLS</h1>
            <FontAwesomeIcon icon={faUserTie} className={`${iconClasses}`} />
          </div>
          <ul className="flex lg:flex-row flex-col gap-6 items-center">
            <li className={liClasses}>Méthode Agile</li>
            {isMobile ? null : <li className={liClasses}>·</li>}
            <li className={liClasses}>Travail d'équipe</li>
            {isMobile ? null : <li className={liClasses}>·</li>}
            <li className={liClasses}>Adaptabilité</li>
            {isMobile ? null : <li className={liClasses}>·</li>}
            <li className={liClasses}>Autonomie</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
