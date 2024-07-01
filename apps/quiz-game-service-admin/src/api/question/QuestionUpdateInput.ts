import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionUpdateInput = {
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  quiz?: QuizWhereUniqueInput | null;
  text?: string | null;
};
