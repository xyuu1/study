
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { useStore } from '../store/useStore';
import { ArrowRight } from 'lucide-react';

const Homework: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);
  const {
    userAnswers,
    setMultipleChoiceAnswer,
    setTrueFalseAnswer,
    setCodingAnswer,
  } = useStore();

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

  const courseAnswers = userAnswers[course.id] || {
    multipleChoice: {},
    trueFalse: {},
    coding: course.homework.coding.starterCode,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{course.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-white">课后作业 - {course.title}</h1>
            </div>
          </div>
          
          <Link
            to={`/course/${course.id}/solution`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/40"
          >
            查看答案解析
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="space-y-10">
          {/* 选择题 */}
          <section className="bg-slate-800/70 rounded-xl p-6 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">1</span>
              选择题（共10题）
            </h2>
            <div className="space-y-6">
              {course.homework.multipleChoice.map((question) => (
                <div
                  key={question.id}
                  className="bg-slate-900/50 rounded-lg p-5 border border-slate-700"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {question.id}. {question.question}
                  </h3>
                  <div className="space-y-3">
                    {question.options?.map((option, index) => (
                      <label
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          courseAnswers.multipleChoice[question.id] === option
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`mc-${question.id}`}
                          value={option}
                          checked={courseAnswers.multipleChoice[question.id] === option}
                          onChange={() => setMultipleChoiceAnswer(course.id, question.id, option)}
                          className="w-4 h-4 text-cyan-500"
                        />
                        <span className="text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 判断题 */}
          <section className="bg-slate-800/70 rounded-xl p-6 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">2</span>
              判断题（共10题）
            </h2>
            <div className="space-y-6">
              {course.homework.trueFalse.map((question) => (
                <div
                  key={question.id}
                  className="bg-slate-900/50 rounded-lg p-5 border border-slate-700"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {question.id}. {question.question}
                  </h3>
                  <div className="flex gap-4">
                    <label
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg border cursor-pointer transition-all ${
                        courseAnswers.trueFalse[question.id] === true
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`tf-${question.id}`}
                        value="true"
                        checked={courseAnswers.trueFalse[question.id] === true}
                        onChange={() => setTrueFalseAnswer(course.id, question.id, true)}
                        className="w-4 h-4 text-green-500"
                      />
                      <span className="text-green-400 font-medium">正确</span>
                    </label>
                    <label
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg border cursor-pointer transition-all ${
                        courseAnswers.trueFalse[question.id] === false
                          ? 'border-red-500 bg-red-500/10'
                          : 'border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`tf-${question.id}`}
                        value="false"
                        checked={courseAnswers.trueFalse[question.id] === false}
                        onChange={() => setTrueFalseAnswer(course.id, question.id, false)}
                        className="w-4 h-4 text-red-500"
                      />
                      <span className="text-red-400 font-medium">错误</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 编程题 */}
          <section className="bg-slate-800/70 rounded-xl p-6 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">3</span>
              编程题
            </h2>
            <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-700 mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {course.homework.coding.title}
              </h3>
              <p className="text-gray-400">{course.homework.coding.description}</p>
            </div>
            <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <textarea
                value={courseAnswers.coding}
                onChange={(e) => setCodingAnswer(course.id, e.target.value)}
                className="w-full h-80 bg-slate-900 text-cyan-100 font-mono text-sm p-4 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homework;
