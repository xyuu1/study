
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../data/courses';
import { useStore } from '../store/useStore';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { setCurrentCourseId } = useStore();

  return (
    <Link
      to={`/course/${course.id}`}
      onClick={() => setCurrentCourseId(course.id)}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{course.icon}</div>
          <ArrowRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {course.description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </Link>
  );
};

export default CourseCard;
