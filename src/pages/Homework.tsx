
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { useStore } from '../store/useStore';
import { ArrowRight } from 'lucide-react';

const Homework: React.FC = () =&gt; {
  const { id } = useParams&lt;{ id: string }&gt;();
  const course = courses.find((c) =&gt; c.id === id);
  const {
    userAnswers,
    setMultipleChoiceAnswer,
    setTrueFalseAnswer,
    setCodingAnswer,
    setCurrentCourseId,
  } = useStore();

  // 设置当前课程ID
  React.useEffect(() =&gt; {
    if (id) {
      setCurrentCourseId(id);
    }
  }, [id, setCurrentCourseId]);

  if (!course) {
    return (
      &lt;div className="min-h-screen bg-slate-900 flex items-center justify-center"&gt;
        &lt;div className="text-center"&gt;
          &lt;h2 className="text-2xl font-bold text-white mb-4"&gt;课程未找到&lt;/h2&gt;
          &lt;Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          &gt;
            返回首页
          &lt;/Link&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }

  // 安全地获取课程答案
  const courseAnswers = React.useMemo(() =&gt; {
    return {
      multipleChoice: userAnswers[course.id]?.multipleChoice || {},
      trueFalse: userAnswers[course.id]?.trueFalse || {},
      coding: userAnswers[course.id]?.coding || course.homework.coding.starterCode,
    };
  }, [userAnswers, course.id, course.homework.coding.starterCode]);

  return (
    &lt;div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12"&gt;
      &lt;div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
        &lt;div className="mb-10"&gt;
          &lt;div className="flex items-center gap-4 mb-6"&gt;
            &lt;span className="text-5xl"&gt;{course.icon}&lt;/span&gt;
            &lt;div&gt;
              &lt;h1 className="text-4xl font-bold text-white"&gt;课后作业 - {course.title}&lt;/h1&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          
          &lt;Link
            to={`/course/${course.id}/solution`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/40"
          &gt;
            查看答案解析
            &lt;ArrowRight className="w-5 h-5" /&gt;
          &lt;/Link&gt;
        &lt;/div&gt;

        &lt;div className="space-y-10"&gt;
          {/* 选择题 */}
          &lt;section className="bg-slate-800/70 rounded-xl p-6 border border-cyan-500/20"&gt;
            &lt;h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"&gt;
              &lt;span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold"&gt;1&lt;/span&gt;
              选择题（共10题）
            &lt;/h2&gt;
            &lt;div className="space-y-6"&gt;
              {course.homework.multipleChoice.map((question) =&gt; (
                &lt;div
                  key={question.id}
                  className="bg-slate-900/50 rounded-lg p-5 border border-slate-700"
                &gt;
                  &lt;h3 className="text-lg font-semibold text-white mb-4"&gt;
                    {question.id}. {question.question}
                  &lt;/h3&gt;
                  &lt;div className="space-y-3"&gt;
                    {question.options?.map((option, index) =&gt; (
                      &lt;div
                        key={index}
                        role="radio"
                        aria-checked={courseAnswers.multipleChoice[question.id] === option}
                        tabIndex={0}
                        onClick={() =&gt; setMultipleChoiceAnswer(course.id, question.id, option)}
                        onKeyDown={(e) =&gt; {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setMultipleChoiceAnswer(course.id, question.id, option);
                          }
                        }}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          courseAnswers.multipleChoice[question.id] === option
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-slate-700 hover:border-slate-500'
                        }`}
                      &gt;
                        &lt;div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          courseAnswers.multipleChoice[question.id] === option
                            ? 'border-cyan-500 bg-cyan-500'
                            : 'border-slate-600'
                        }`}&gt;
                          {courseAnswers.multipleChoice[question.id] === option && (
                            &lt;div className="w-2 h-2 bg-white rounded-full" /&gt;
                          )}
                        &lt;/div&gt;
                        &lt;span className="text-gray-300"&gt;{option}&lt;/span&gt;
                      &lt;/div&gt;
                    ))}
                  &lt;/div&gt;
                &lt;/div&gt;
              ))}
            &lt;/div&gt;
          &lt;/section&gt;

          {/* 判断题 */}
          &lt;section className="bg-slate-800/70 rounded-xl p-6 border border-cyan-500/20"&gt;
            &lt;h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"&gt;
              &lt;span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold"&gt;2&lt;/span&gt;
              判断题（共10题）
            &lt;/h2&gt;
            &lt;div className="space-y-6"&gt;
              {course.homework.trueFalse.map((question) =&gt; (
                &lt;div
                  key={question.id}
                  className="bg-slate-900/50 rounded-lg p-5 border border-slate-700"
                &gt;
                  &lt;h3 className="text-lg font-semibold text-white mb-4"&gt;
                    {question.id}. {question.question}
                  &lt;/h3&gt;
                  &lt;div className="flex gap-4"&gt;
                    &lt;div
                      role="radio"
                      aria-checked={courseAnswers.trueFalse[question.id] === true}
                      tabIndex={0}
                      onClick={() =&gt; setTrueFalseAnswer(course.id, question.id, true)}
                      onKeyDown={(e) =&gt; {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setTrueFalseAnswer(course.id, question.id, true);
                        }
                      }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg border cursor-pointer transition-all ${
                        courseAnswers.trueFalse[question.id] === true
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-slate-700 hover:border-slate-500'
                      }`}
                    &gt;
                      &lt;div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        courseAnswers.trueFalse[question.id] === true
                          ? 'border-green-500 bg-green-500'
                          : 'border-slate-600'
                      }`}&gt;
                        {courseAnswers.trueFalse[question.id] === true && (
                          &lt;div className="w-2 h-2 bg-white rounded-full" /&gt;
                        )}
                      &lt;/div&gt;
                      &lt;span className="text-green-400 font-medium"&gt;正确&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div
                      role="radio"
                      aria-checked={courseAnswers.trueFalse[question.id] === false}
                      tabIndex={0}
                      onClick={() =&gt; setTrueFalseAnswer(course.id, question.id, false)}
                      onKeyDown={(e) =&gt; {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setTrueFalseAnswer(course.id, question.id, false);
                        }
                      }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg border cursor-pointer transition-all ${
                        courseAnswers.trueFalse[question.id] === false
                          ? 'border-red-500 bg-red-500/10'
                          : 'border-slate-700 hover:border-slate-500'
                      }`}
                    &gt;
                      &lt;div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        courseAnswers.trueFalse[question.id] === false
                          ? 'border-red-500 bg-red-500'
                          : 'border-slate-600'
                      }`}&gt;
                        {courseAnswers.trueFalse[question.id] === false && (
                          &lt;div className="w-2 h-2 bg-white rounded-full" /&gt;
                        )}
                      &lt;/div&gt;
                      &lt;span className="text-red-400 font-medium"&gt;错误&lt;/span&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              ))}
            &lt;/div&gt;
          &lt;/section&gt;

          {/* 编程题 */}
          &lt;section className="bg-slate-800/70 rounded-xl p-6 border border-cyan-500/20"&gt;
            &lt;h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"&gt;
              &lt;span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold"&gt;3&lt;/span&gt;
              编程题
            &lt;/h2&gt;
            &lt;div className="bg-slate-900/50 rounded-lg p-5 border border-slate-700 mb-4"&gt;
              &lt;h3 className="text-lg font-semibold text-white mb-2"&gt;
                {course.homework.coding.title}
              &lt;/h3&gt;
              &lt;p className="text-gray-400"&gt;{course.homework.coding.description}&lt;/p&gt;
            &lt;/div&gt;
            &lt;div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden"&gt;
              &lt;textarea
                value={courseAnswers.coding}
                onChange={(e) =&gt; setCodingAnswer(course.id, e.target.value)}
                className="w-full h-80 bg-slate-900 text-cyan-100 font-mono text-sm p-4 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              /&gt;
            &lt;/div&gt;
          &lt;/section&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

export default Homework;
