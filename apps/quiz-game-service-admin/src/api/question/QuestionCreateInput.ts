import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionCreateInput = {
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  quiz?: QuizWhereUniqueInput | null;
  text?: string | null;
};
