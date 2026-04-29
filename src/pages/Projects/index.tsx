import OutlineTitle from '../../components/OutlineTitle';
import projects from './projects.json';
import ProjectCard from '../../components/ProjectCard';

function Projects() {
  // Avoir des genre de cards 'rangées', au hover la card monte légèrement, au clic on est redirigés et au clic sur le i on affiche la descriptiopn sur la card avec un fond foncé
  return (
    <div className="p-6">
      <OutlineTitle title={'Projets'} size={'small'} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-6 p-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            url={project.url}
            color={project.color} // a remplacer par une url de miniature plus tard
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
