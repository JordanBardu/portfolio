import projects from './projects.json';
import ProjectCard from '../../components/ProjectCard';

function Projects() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-6 p-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            url={project.url}
            thumbnail={project.thumbnail}
            color={project.color}
            description={project.description}
            defaultOpen={index < 3}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
