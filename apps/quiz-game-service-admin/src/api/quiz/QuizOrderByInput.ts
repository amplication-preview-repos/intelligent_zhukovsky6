import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  author?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
