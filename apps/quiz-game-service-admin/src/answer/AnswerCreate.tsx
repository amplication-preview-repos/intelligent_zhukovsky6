import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { QuestionTitle } from "../question/QuestionTitle";

export const AnswerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isCorrect" source="isCorrect" />
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
