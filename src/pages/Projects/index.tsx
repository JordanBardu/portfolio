import projects from './projects.json';
import ProjectCard from '../../components/ProjectCard';

function Projects() {
  return (
    <div className="lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-12 gap-x-6 lg:p-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            url={project.url}
            githubUrl={project.github_url}
            thumbnail={project.thumbnail}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
