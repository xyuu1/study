
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Home, BookOpen, FileText, CheckCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { currentCourseId } = useStore();

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all"
            >
              📊 DataLearn
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">首页</span>
            </Link>
            
            {currentCourseId && (
              <>
                <Link
                  to={`/course/${currentCourseId}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === `/course/${currentCourseId}`
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="hidden sm:inline">学习</span>
                </Link>
                
                <Link
                  to={`/course/${currentCourseId}/homework`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === `/course/${currentCourseId}/homework`
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span className="hidden sm:inline">作业</span>
                </Link>
                
                <Link
                  to={`/course/${currentCourseId}/solution`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === `/course/${currentCourseId}/solution`
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800'
                  }`}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="hidden sm:inline">解析</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
