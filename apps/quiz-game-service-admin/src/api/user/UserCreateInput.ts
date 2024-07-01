import { QuizAttemptCreateNestedManyWithoutUsersInput } from "./QuizAttemptCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  quizAttempts?: QuizAttemptCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
