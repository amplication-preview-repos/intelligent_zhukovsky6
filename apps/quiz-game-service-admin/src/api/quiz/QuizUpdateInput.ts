import { QuestionUpdateManyWithoutQuizzesInput } from "./QuestionUpdateManyWithoutQuizzesInput";
import { QuizAttemptUpdateManyWithoutQuizzesInput } from "./QuizAttemptUpdateManyWithoutQuizzesInput";

export type QuizUpdateInput = {
  author?: string | null;
  description?: string | null;
  questions?: QuestionUpdateManyWithoutQuizzesInput;
  quizAttempts?: QuizAttemptUpdateManyWithoutQuizzesInput;
  title?: string | null;
};
