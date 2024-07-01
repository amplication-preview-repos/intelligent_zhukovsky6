import { Quiz } from "../quiz/Quiz";
import { User } from "../user/User";

export type QuizAttempt = {
  createdAt: Date;
  id: string;
  quiz?: Quiz | null;
  score: number | null;
  timeTaken: number | null;
  updatedAt: Date;
  user?: User | null;
};
