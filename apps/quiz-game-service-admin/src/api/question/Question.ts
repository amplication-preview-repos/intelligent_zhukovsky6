import { Answer } from "../answer/Answer";
import { Quiz } from "../quiz/Quiz";

export type Question = {
  answers?: Array<Answer>;
  createdAt: Date;
  id: string;
  quiz?: Quiz | null;
  text: string | null;
  updatedAt: Date;
};
