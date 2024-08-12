interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  