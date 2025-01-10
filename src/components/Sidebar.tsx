import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, GraduationCap, Code, Brain, Mail } from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="w-64 bg-gray-900 text-white p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Kushal Ramaiya</h1>
        <p className="text-gray-400">Software Development Engineer</p>
      </div>
      
      <div className="space-y-4">
        <Link to="/" className={`flex items-center space-x-3 p-3 rounded hover:bg-blue-700 transition ${isActive('/')}`}>
          <Home size={20} />
          <span>Home</span>
        </Link>
        
        <Link to="/experience" className={`flex items-center space-x-3 p-3 rounded hover:bg-blue-700 transition ${isActive('/experience')}`}>
          <Briefcase size={20} />
          <span>Experience</span>
        </Link>
        
        <Link to="/education" className={`flex items-center space-x-3 p-3 rounded hover:bg-blue-700 transition ${isActive('/education')}`}>
          <GraduationCap size={20} />
          <span>Education</span>
        </Link>
        
        <Link to="/projects" className={`flex items-center space-x-3 p-3 rounded hover:bg-blue-700 transition ${isActive('/projects')}`}>
          <Code size={20} />
          <span>Projects</span>
        </Link>
        
        <Link to="/skills" className={`flex items-center space-x-3 p-3 rounded hover:bg-blue-700 transition ${isActive('/skills')}`}>
          <Brain size={20} />
          <span>Skills</span>
        </Link>
        
        <Link to="/contact" className={`flex items-center space-x-3 p-3 rounded hover:bg-blue-700 transition ${isActive('/contact')}`}>
          <Mail size={20} />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;