
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

export const useStore = create<AppState>((set) => ({
  currentCourseId: null,
  setCurrentCourseId: (id) => set({ currentCourseId: id }),
  userAnswers: {},
  setMultipleChoiceAnswer: (courseId, questionId, answer) =>
    set((state) => ({
      userAnswers: {
        ...state.userAnswers,
        [courseId]: {
          ...state.userAnswers[courseId],
          multipleChoice: {
            ...(state.userAnswers[courseId]?.multipleChoice || {}),
            [questionId]: answer,
          },
        },
      },
    })),
  setTrueFalseAnswer: (courseId, questionId, answer) =>
    set((state) => ({
      userAnswers: {
        ...state.userAnswers,
        [courseId]: {
          ...state.userAnswers[courseId],
          trueFalse: {
            ...(state.userAnswers[courseId]?.trueFalse || {}),
            [questionId]: answer,
          },
        },
      },
    })),
  setCodingAnswer: (courseId, code) =>
    set((state) => ({
      userAnswers: {
        ...state.userAnswers,
        [courseId]: {
          ...state.userAnswers[courseId],
          coding: code,
        },
      },
    })),
  resetCourseAnswers: (courseId) =>
    set((state) => ({
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
