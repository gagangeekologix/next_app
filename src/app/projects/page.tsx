import ProjectCard from '../../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A description of project one.',
      imageUrl: '/images/project1.jpg'
    },
    {
      title: 'Project Two',
      description: 'A description of project two.',
      imageUrl: '/images/project2.jpg'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
