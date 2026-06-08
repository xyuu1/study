
import { create } from 'zustand';

interface AppState {
  currentCourseId: string | null;
  setCurrentCourseId: (id: string | null) => void;
  userAnswers: {
    [courseId: string]: {
      multipleChoice: { [questionId: number]: string | null };
      trueFalse: { [questionId: number]: boolean | null };
      coding: string;
    };
  };
  setMultipleChoiceAnswer: (courseId: string, questionId: number, answer: string) => void;
  setTrueFalseAnswer: (courseId: string, questionId: number, answer: boolean) => void;
  setCodingAnswer: (courseId: string, code: string) => void;
  resetCourseAnswers: (courseId: string) => void;
}

// 辅助函数：确保课程对象存在
const ensureCourseExists = (state: AppState, courseId: string) => {
  return {
    ...state.userAnswers,
    [courseId]: {
      multipleChoice: {},
      trueFalse: {},
      coding: '',
      ...state.userAnswers[courseId],
    },
  };
};

export const useStore = create&lt;AppState&gt;((set) =&gt; ({
  currentCourseId: null,
  setCurrentCourseId: (id) =&gt; set({ currentCourseId: id }),
  userAnswers: {},
  
  setMultipleChoiceAnswer: (courseId, questionId, answer) =&gt;
    set((state) =&gt; {
      const updatedUserAnswers = ensureCourseExists(state, courseId);
      return {
        userAnswers: {
          ...updatedUserAnswers,
          [courseId]: {
            ...updatedUserAnswers[courseId],
            multipleChoice: {
              ...updatedUserAnswers[courseId].multipleChoice,
              [questionId]: answer,
            },
          },
        },
      };
    }),
  
  setTrueFalseAnswer: (courseId, questionId, answer) =&gt;
    set((state) =&gt; {
      const updatedUserAnswers = ensureCourseExists(state, courseId);
      return {
        userAnswers: {
          ...updatedUserAnswers,
          [courseId]: {
            ...updatedUserAnswers[courseId],
            trueFalse: {
              ...updatedUserAnswers[courseId].trueFalse,
              [questionId]: answer,
            },
          },
        },
      };
    }),
  
  setCodingAnswer: (courseId, code) =&gt;
    set((state) =&gt; {
      const updatedUserAnswers = ensureCourseExists(state, courseId);
      return {
        userAnswers: {
          ...updatedUserAnswers,
          [courseId]: {
            ...updatedUserAnswers[courseId],
            coding: code,
          },
        },
      };
    }),
  
  resetCourseAnswers: (courseId) =&gt;
    set((state) =&gt; ({
      userAnswers: {
        ...state.userAnswers,
        [courseId]: {
          multipleChoice: {},
          trueFalse: {},
          coding: '',
        },
      },
    })),
}));
