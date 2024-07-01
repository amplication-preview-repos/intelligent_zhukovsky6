import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizAttemptListRelationFilter } from "../quizAttempt/QuizAttemptListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  quizAttempts?: QuizAttemptListRelationFilter;
  username?: StringFilter;
};
