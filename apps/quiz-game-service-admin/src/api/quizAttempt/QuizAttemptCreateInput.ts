import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuizAttemptCreateInput = {
  quiz?: QuizWhereUniqueInput | null;
  score?: number | null;
  timeTaken?: number | null;
  user?: UserWhereUniqueInput | null;
};
