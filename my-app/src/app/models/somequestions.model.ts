export class SomeQuestionsModel {
  title: string = '';
  QuestionModel: QuestionModel[] = [];
}

export class QuestionModel {
  question: string = '';
  choice1: string = '';
  choice2: string = '';
  choice3: string = '';
  answer: string = '';
}
