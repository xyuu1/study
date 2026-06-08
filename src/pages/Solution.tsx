import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { useStore } from '../store/useStore';
import { CheckCircle2, XCircle, BookOpen } from 'lucide-react';

const Solution: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);
  const { userAnswers } = useStore();

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">课程未找到</h2>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
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
              <h1 className="text-4xl font-bold text-white">答案解析 - {course.title}</h1>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {/* 选择题解析 */}
          <section className="bg-slate-800/70 rounded-xl p-6 border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">1. 选择题解析</h2>
            <div className="space-y-6">
              {course.solution.multipleChoice.map((solution) => {
                const question = course.homework.multipleChoice.find((q) => q.id === solution.id);
                return (
                  <div key={solution.id} className="bg-slate-900/50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-white mb-3">{solution.id}. {question?.question}</h3>
                    <p className="text-cyan-400 font-medium mb-3">正确答案：{solution.correctAnswer}</p>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />解析
                      </h4>
                      <p className="text-gray-400">{solution.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 判断题解析 */}
          <section className="bg-slate-800/70 rounded-xl p-6 border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">2. 判断题解析</h2>
            <div className="space-y-6">
              {course.solution.trueFalse.map((solution) => {
                const question = course.homework.trueFalse.find((q) => q.id === solution.id);
                return (
                  <div key={solution.id} className="bg-slate-900/50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-white mb-3">{solution.id}. {question?.question}</h3>
                    <p className="text-cyan-400 font-medium mb-3">正确答案：{solution.correctAnswer ? '正确' : '错误'}</p>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />解析
                      </h4>
                      <p className="text-gray-400">{solution.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 编程题解析 */}
          <section className="bg-slate-800/70 rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">3. 编程题解析</h2>
            <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-700 mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">{course.homework.coding.title}</h3>
              <p className="text-gray-400">{course.homework.coding.description}</p>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-300 mb-3">参考答案：</h4>
              <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
                <pre className="text-cyan-100 font-mono text-sm p-4 overflow-x-auto">
                  <code>{course.solution.coding.solutionCode}</code>
                </pre>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-5">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />解析
              </h4>
              <p className="text-gray-400">{course.solution.coding.explanation}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Solution;
