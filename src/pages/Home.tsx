
import React from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            数据分析技术
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            从零开始学习数据分析，掌握Python编程、数据采集、清洗和可视化技能
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            🎯 学习路线
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {['Python基础', '数据来源', '数据采集', '数据清洗', '数据可视化'].map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30">
                    {index + 1}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{step}</span>
                </div>
                {index < 4 && (
                  <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
