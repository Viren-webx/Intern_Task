import { useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../Data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filtered = projects.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (status === "" || p.status === status)
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300"
    >
      <Navbar />

      <div className="p-6 max-w-7xl mx-auto">

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            placeholder="Search projects..."
            className="flex-1 border border-gray-300 dark:border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border border-gray-300 dark:border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

      </div>
    </motion.div>
  );
}