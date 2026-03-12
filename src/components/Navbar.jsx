import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
    const { logout } = useAuth();
    const { darkMode, setDarkMode } = useTheme();

    return (
        <nav className="bg-white dark:bg-slate-900 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link
                    to="/projects"
                    className="text-2xl font-bold text-amber-600 dark:text-amber-400"
                >
                    BuildTrack
                </Link>

                <div className="flex items-center gap-4">

                    <a
                        href="https://github.com/Viren-webx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white dark:hover:text-blue-400 hover:text-blue-500 transition-colors duration-200"
                    >
                        <FaGithub className="text-3xl md:text-4xl" />
                    </a>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        Logout
                    </button>

                </div>
            </div>
        </nav>
    );
}