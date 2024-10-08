const ProjectCard = ({ project, onClick }: any) => {
  return (
    <div
      className="m-2 rounded-md text-white cursor-pointer"
      onClick={() => onClick(project)}
    >
      {/* Project Image */}
      <div className="relative">
        <img
          src={project?.image}
          alt={project?.title}
          className="w-full h-72 object-cover rounded-md"
        />
        {/* Overlay Title */}
        <div className="absolute bottom-2 w-full text-center -mb-2 bg-[#33297C] bg-opacity-75 rounded-b-md py-2">
          <h3 className="text-lg font-bold">{project?.title}</h3>
          <p className="text-sm">{project?.category}</p>
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;
