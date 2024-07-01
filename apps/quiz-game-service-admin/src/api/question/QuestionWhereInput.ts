import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuestionWhereInput = {
  answers?: AnswerListRelationFilter;
  id?: StringFilter;
  quiz?: QuizWhereUniqueInput;
  text?: StringNullableFilter;
};
