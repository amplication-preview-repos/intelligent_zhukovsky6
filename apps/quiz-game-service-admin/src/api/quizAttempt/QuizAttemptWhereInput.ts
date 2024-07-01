import { StringFilter } from "../../util/StringFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuizAttemptWhereInput = {
  id?: StringFilter;
  quiz?: QuizWhereUniqueInput;
  score?: IntNullableFilter;
  timeTaken?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
