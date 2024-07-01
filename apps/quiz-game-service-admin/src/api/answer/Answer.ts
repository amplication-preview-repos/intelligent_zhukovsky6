import { Question } from "../question/Question";

export type Answer = {
  createdAt: Date;
  id: string;
  isCorrect: boolean | null;
  question?: Question | null;
  text: string | null;
  updatedAt: Date;
};
