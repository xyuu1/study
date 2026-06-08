
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowRight } from 'lucide-react';

const CourseLearning: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">课程未找到</h2>
          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{course.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-white">{course.title}</h1>
              <p className="text-gray-400 mt-2">{course.description}</p>
            </div>
          </div>
          
          <Link
            to={`/course/${course.id}/homework`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40"
          >
            开始作业
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="space-y-8">
          {course.content.map((chapter, chapterIndex) => (
            <div
              key={chapterIndex}
              className="bg-slate-800/70 rounded-xl p-6 border border-cyan-500/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {chapterIndex + 1}. {chapter.title}
              </h2>
              <div className="space-y-6">
                {chapter.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-3">
                    {section.title && (
                      <h3 className="text-lg font-semibold text-cyan-400">
                        {section.title}
                      </h3>
                    )}
                    
                    {section.type === 'text' && (
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    )}
                    
                    {section.type === 'code' && (
                      <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 overflow-x-auto">
                        <pre className="text-cyan-100 font-mono text-sm">
                          <code>{section.content}</code>
                        </pre>
                      </div>
                    )}
                    
                    {section.type === 'image' && (
                      <div className="bg-slate-900 rounded-lg p-8 border border-slate-700 flex items-center justify-center text-gray-500">
                        <p>图表/图片展示区域</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseLearning;
