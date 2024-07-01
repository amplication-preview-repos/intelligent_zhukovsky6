/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Question } from "./Question";
import { QuestionCountArgs } from "./QuestionCountArgs";
import { QuestionFindManyArgs } from "./QuestionFindManyArgs";
import { QuestionFindUniqueArgs } from "./QuestionFindUniqueArgs";
import { CreateQuestionArgs } from "./CreateQuestionArgs";
import { UpdateQuestionArgs } from "./UpdateQuestionArgs";
import { DeleteQuestionArgs } from "./DeleteQuestionArgs";
import { AnswerFindManyArgs } from "../../answer/base/AnswerFindManyArgs";
import { Answer } from "../../answer/base/Answer";
import { Quiz } from "../../quiz/base/Quiz";
import { QuestionService } from "../question.service";
@graphql.Resolver(() => Question)
export class QuestionResolverBase {
  constructor(protected readonly service: QuestionService) {}

  async _questionsMeta(
    @graphql.Args() args: QuestionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Question])
  async questions(
    @graphql.Args() args: QuestionFindManyArgs
  ): Promise<Question[]> {
    return this.service.questions(args);
  }

  @graphql.Query(() => Question, { nullable: true })
  async question(
    @graphql.Args() args: QuestionFindUniqueArgs
  ): Promise<Question | null> {
    const result = await this.service.question(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Question)
  async createQuestion(
    @graphql.Args() args: CreateQuestionArgs
  ): Promise<Question> {
    return await this.service.createQuestion({
      ...args,
      data: {
        ...args.data,

        quiz: args.data.quiz
          ? {
              connect: args.data.quiz,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Question)
  async updateQuestion(
    @graphql.Args() args: UpdateQuestionArgs
  ): Promise<Question | null> {
    try {
      return await this.service.updateQuestion({
        ...args,
        data: {
          ...args.data,

          quiz: args.data.quiz
            ? {
                connect: args.data.quiz,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Question)
  async deleteQuestion(
    @graphql.Args() args: DeleteQuestionArgs
  ): Promise<Question | null> {
    try {
      return await this.service.deleteQuestion(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Answer], { name: "answers" })
  async findAnswers(
    @graphql.Parent() parent: Question,
    @graphql.Args() args: AnswerFindManyArgs
  ): Promise<Answer[]> {
    const results = await this.service.findAnswers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Quiz, {
    nullable: true,
    name: "quiz",
  })
  async getQuiz(@graphql.Parent() parent: Question): Promise<Quiz | null> {
    const result = await this.service.getQuiz(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
