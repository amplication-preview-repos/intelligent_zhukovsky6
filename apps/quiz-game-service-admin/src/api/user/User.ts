import { QuizAttempt } from "../quizAttempt/QuizAttempt";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  quizAttempts?: Array<QuizAttempt>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
