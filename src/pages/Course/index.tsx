import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import jooxterLogo from '../../assets/images/logo_Jooxter_mise_en_avant_homepage.png';
import univLogo from '../../assets/images/Logotype_Université_de_Lille_2022.svg.png';
import ocrLogo from '../../assets/images/logo_open_classroom.png';
import useIsSmallScreen from '../../hooks/useIsSmallScreen.ts';
import { SCREEN_SIZE } from '../../hooks/types.ts';

function Course() {
  const isMobile = useIsSmallScreen(SCREEN_SIZE.LG);

  return (
    <div className="p-6">
      <div className="w-full h-12" />
      <VerticalTimeline>
        <VerticalTimelineElement
          date="2024 - Present"
          contentStyle={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            color: '#fff',
            borderBottom: '5px solid rgba(255,255,255,0.25)',
          }}
          contentArrowStyle={{
            borderRight: '7px solid rgba(255,255,255,0.25)',
          }}
          iconStyle={{
            background: 'var(--color-primary)',
            color: '#fff',
            height: '40px',
            width: '40px',
            marginLeft: isMobile ? '' : '-20px',
            marginTop: '10px',
          }}
        >
          <div className={'flex flex-col justify-center items-center gap-6'}>
            <div>
              <div className="flex flex-col items-center justify-start">
                <img src={jooxterLogo} alt="Logo de Jooxter" className="w-24" />
                <h3 className="vertical-timeline-element-title">
                  Developpeur Front-end (alternance)
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Lille, Euratechnologies
                </h4>
              </div>
              <p className="font-[Nunito] text-center">
                J'ai participé au developpement d'un SaaS en React et
                Typescript, manipulation de Tailwind, méthode Agile. J'ai pu
                également travailler sur la partie mobile avec du Angular et du
                React Native
              </p>
            </div>
            <div className="w-full h-[1px] bg-white opacity-40" />
            <div>
              <div className="flex flex-col items-center justify-start">
                <img
                  src={ocrLogo}
                  alt="Logo d'Openclassrooms'"
                  className="w-64 mb-4"
                />
                <h3 className="vertical-timeline-element-title">
                  Formation Integrateur Web
                </h3>
                <h4 className="vertical-timeline-element-subtitle">En ligne</h4>
              </div>
              <p className="font-[Nunito] text-center">
                Formation axée sur le développement front-end et l'intégration
                de maquettes, utilisation approfondie de React et des outils de
                styling (Tailwind CSS), manipulation de retours API,
                apprentissage des animations et du responsive, gestion de projet
              </p>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2023 - 2024"
          contentStyle={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            color: '#fff',
            borderBottom: '5px solid rgba(255,255,255,0.25)',
          }}
          contentArrowStyle={{
            borderRight: '7px solid rgba(255,255,255,0.25)',
          }}
          iconStyle={{
            background: 'var(--color-primary)',
            color: '#fff',
            height: '40px',
            width: '40px',
            marginLeft: isMobile ? '' : '-20px',
            marginTop: '10px',
          }}
        >
          <div className="flex flex-col items-center justify-start">
            <img
              src={univLogo}
              alt="Logo de l'université de Lille"
              className="w-1/2 mb-6"
            />
            <h3 className="vertical-timeline-element-title">
              Licence 2 Informatique
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Université de Lille
            </h4>
          </div>
          <p className="font-[Nunito] text-center">
            Deuxième année plus spécialisée en Informatique, approfondissement
            des compétences en développement (JS, Java, Python, C++, SQL),
            découverte de React et du développement web en général,
            approfondissement des compétences en sciences de l'ingénieur
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2022 - 2023"
          contentStyle={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            color: '#fff',
            borderBottom: '5px solid rgba(255,255,255,0.25)',
          }}
          contentArrowStyle={{
            borderRight: '7px solid rgba(255,255,255,0.25)',
          }}
          iconStyle={{
            background: 'var(--color-primary)',
            color: '#fff',
            height: '40px',
            width: '40px',
            marginLeft: isMobile ? '' : '-20px',
            marginTop: '10px',
          }}
        >
          <div className="flex flex-col items-center justify-start">
            <img
              src={univLogo}
              alt="Logo de l'université de Lille"
              className="w-1/2 mb-6"
            />
            <h3 className="vertical-timeline-element-title">Licence 1 SESI</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Université de Lille
            </h4>
          </div>
          <p className="font-[Nunito] text-center">
            Première année axée sur les sciences de l'ingénieur, premiers pas
            dans le code (HTML, CSS, JS, Java), découverte de Git. Développement
            des compétences en mathématiques, physique, électronique, mécanique
            etc.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Course;
