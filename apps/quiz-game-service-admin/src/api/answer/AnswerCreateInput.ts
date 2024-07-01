import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerCreateInput = {
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
};
