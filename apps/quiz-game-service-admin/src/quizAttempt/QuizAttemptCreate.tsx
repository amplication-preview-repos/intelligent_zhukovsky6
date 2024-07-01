import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { QuizTitle } from "../quiz/QuizTitle";
import { UserTitle } from "../user/UserTitle";

export const QuizAttemptCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="quiz.id" reference="Quiz" label="quiz">
          <SelectInput optionText={QuizTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="score" source="score" />
        <NumberInput step={1} label="timeTaken" source="timeTaken" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
