import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiSupabase, SiRedux } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="h-[70px] mt-8 mb-2 flex items-center">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-gray-700 text-sm gap-[300px]">
        
        {/* Left Section */}
        <div className="font-bold text-md tracking-wide">
          Jeo Abarre <span className="font-normal">| 2025 - Simple Blog</span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-2">
          <div className="text-sm font-bold text-gray-600">Made with</div>
          <div className="flex items-center space-x-6">
            {/* React */}
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <FaReact className="text-blue-500 text-xl" />
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                React
              </span>
            </a>

            {/* Tailwind */}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <SiTailwindcss className="text-teal-400 text-xl" />
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                Tailwind CSS
              </span>
            </a>

            {/* Redux */}
            <a
              href="https://redux.js.org"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <SiRedux className="text-purple-600 text-xl" />
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                Redux
              </span>
            </a>

            {/* Supabase */}
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <SiSupabase className="text-indigo-600 text-xl" />
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                Supabase
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
