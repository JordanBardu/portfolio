import projects from './projects.json';
import ProjectCard from '../../components/ProjectCard';
import useIsSmallScreen from '../../hooks/useIsSmallScreen.ts';
import { SCREEN_SIZE } from '../../hooks/types.ts';

function Projects() {
  const isMobile = useIsSmallScreen(SCREEN_SIZE.LG);

  return (
    <div className="lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-12 gap-x-6 lg:p-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            url={project.url}
            githubUrl={project.github_url}
            thumbnail={project.thumbnail}
            description={project.description}
            defaultOpen={!isMobile && index < 3}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
