import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  questionId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
