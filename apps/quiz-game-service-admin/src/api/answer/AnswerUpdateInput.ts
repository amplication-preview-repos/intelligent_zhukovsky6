import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerUpdateInput = {
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
};
