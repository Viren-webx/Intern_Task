import { useState } from "react";
import Navbar from "../components/Navbar";
import { projects } from "../Data/projects";
import ImageUploadPreview from "../components/ImageUploadPreview";
import { validateDPR } from "../utils/validation";
import { useNavigate } from "react-router-dom";

export default function DPRForm() {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  const [form, setForm] = useState({
    project: "",
    date: "",
    weather: "",
    description: "",
    workers: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateDPR(form, images);

    if (error) {
      alert(error);
      return;
    }

    alert("DPR Submitted Successfully");
    navigate("/projects");
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Navbar />

      <div className="p-4 max-w-xl mx-auto">

        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Daily Progress Report
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <select
            className="w-full border border-gray-300 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 outline-none shadow-sm hover:shadow-md transition-all duration-200 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setForm({ ...form, project: e.target.value })}
          >
            <option>Select Project</option>
            {projects.map((p) => (
              <option key={p.id}>{p.name}</option>
            ))}
          </select>

          <input
            type="date"
            className="w-full border border-gray-300 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 outline-none shadow-sm hover:shadow-md transition-all duration-200 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <select
            className="w-full border border-gray-300 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 outline-none shadow-sm hover:shadow-md transition-all duration-200 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setForm({ ...form, weather: e.target.value })}
          >
            <option>Weather</option>
            <option>Sunny</option>
            <option>Cloudy</option>
            <option>Rainy</option>
          </select>

          <textarea
            placeholder="Work Description"
            className="w-full border border-gray-300 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 outline-none shadow-sm hover:shadow-md transition-all duration-200 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Worker Count"
            className="w-full border border-gray-300 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 outline-none shadow-sm hover:shadow-md transition-all duration-200 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setForm({ ...form, workers: e.target.value })}
          />

          <ImageUploadPreview images={images} setImages={setImages} />

          <button className="bg-amber-500 hover:bg-amber-600 text-white w-full py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
            Submit DPR
          </button>

        </form>
      </div>
    </div>
  );
}