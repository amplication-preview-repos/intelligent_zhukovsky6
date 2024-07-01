import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  quizId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
