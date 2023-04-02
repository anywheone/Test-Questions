import { Component } from '@angular/core';
import {
  QuestionModel,
  SomeQuestionsModel,
} from 'src/app/models/somequestions.model';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
})
export class CreateTestComponent {
  title: string = '';
  _someQuestionsModel: SomeQuestionsModel = new SomeQuestionsModel();
  children: QuestionModel[] = [];
  http: any;

  addQuestion() {
    // 子コンポーネントの追加
    this.children.push(new QuestionModel());
  }

  submitQuestions() {
    this._someQuestionsModel.title = this.title;

    this.children.forEach((child) => {
      this._someQuestionsModel.QuestionModel.push(child);
    });

    console.debug(this._someQuestionsModel);

    // APIコール
    this.http.post('/api/questions', this._someQuestionsModel).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
