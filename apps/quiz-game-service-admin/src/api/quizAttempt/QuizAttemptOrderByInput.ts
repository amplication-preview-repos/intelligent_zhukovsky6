import { SortOrder } from "../../util/SortOrder";

export type QuizAttemptOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  quizId?: SortOrder;
  score?: SortOrder;
  timeTaken?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
