import OutlineTitle from "../../components/OutlineTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import jooxterLogo from "../../assets/images/logo_Jooxter_mise_en_avant_homepage.png";
import univLogo from "../../assets/images/Logotype_Université_de_Lille_2022.svg.png";
import ocrLogo from "../../assets/images/logo_open_classroom.png";

function Course() {
  return (
    <div className="p-6">
      <OutlineTitle title={"Parcours"} size={"small"} />
      <div className="w-full h-12" />

      <VerticalTimeline>
        <VerticalTimelineElement
          date="2024 - Present"
          contentStyle={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            color: "#fff",
            borderBottom: "5px solid rgba(255,255,255,0.25)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(255,255,255,0.25)",
          }}
          iconStyle={{
            background: "var(--color-primary)",
            color: "#fff",
          }}
        >
          <div className={"flex flex-col justify-center items-center gap-6"}>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2022 - 2024"
          contentStyle={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            color: "#fff",
            borderBottom: "5px solid rgba(255,255,255,0.25)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(255,255,255,0.25)",
          }}
          iconStyle={{
            background: "var(--color-primary)",
            color: "#fff",
          }}
        >
          <div className="flex flex-col items-center justify-start">
            <img
              src={univLogo}
              alt="Logo de l'université de Lille"
              className="w-1/2 h-14 mb-6"
            />
            <h3 className="vertical-timeline-element-title">
              Licence Informatique
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Université de Lille
            </h4>
          </div>
          <p className="font-[Nunito] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Course;
