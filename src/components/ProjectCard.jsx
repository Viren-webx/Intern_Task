import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const statusColor = {
    Active: "bg-green-500",
    Completed: "bg-blue-500",
    Pending: "bg-yellow-500",
  };

  return (
    <div
      onClick={() => navigate("/dpr")}
      className="bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-shadow duration-300 p-5 rounded-xl cursor-pointer transform hover:-translate-y-1"
    >
      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
        {project.name}
      </h3>

      <span
        className={`text-white px-3 py-1 text-xs font-semibold rounded-full ${statusColor[project.status]} bg-opacity-90`}
      >
        {project.status}
      </span>

      <div className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
        <p>📍 {project.location}</p>
        <p>Start: {project.startDate}</p>
      </div>
    </div>
  );
}