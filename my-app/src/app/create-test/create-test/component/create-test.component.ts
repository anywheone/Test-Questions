import { Component } from '@angular/core';
import {
  QuestionModel,
  SomeQuestionsModel,
} from 'src/app/models/somequestions.model';

import { HttpClient } from '@angular/common/http'; //これのDIがnullとかでルーティング不可エラーになった
// import { SERVER_URL } from 'src/app/const/server-config';
import { CreateTestService } from '../create-test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
})
export class CreateTestComponent {
  constructor(
    private http: HttpClient,
    private createTestService: CreateTestService
  ) {}

  // getData() {
  //   console.log('getData');
  //   return this.http.get(`${SERVER_URL}/api/helloworld/get2`);
  // }

  title: string = '';
  _someQuestionsModel: SomeQuestionsModel = new SomeQuestionsModel();
  children: QuestionModel[] = [];

  addQuestion() {
    // 子コンポーネントの追加(問題追加)
    this.children.push(new QuestionModel());
    console.log('addQuestion');
  }

  submitQuestions() {
    console.debug('test');
    console.log('submitQuestions');
    this._someQuestionsModel.title = this.title;

    this.children.forEach((child) => {
      this._someQuestionsModel.QuestionModel.push(child);
    });

    console.debug('test2');
    console.debug(this._someQuestionsModel);

    this.createTestService.getHelloWorld().subscribe((data) => {
      console.log(data);
    });

    // 問題集登録APIコール
    // this.http
    //   .post(`${SERVER_URL}/api/helloworld/get`, this._someQuestionsModel)
    //   .subscribe(
    //     (response: any) => {
    //       console.log(response);
    //       // 問題集作成OKポップアップ

    //       // 前画面へ戻る
    //     },
    //     (error: any) => {
    //       console.log(error);
    //       // 問題集作成NGポップアップ
    //     }
    //   );

    // this.http.get(`${SERVER_URL}/api/helloworld`).subscribe((data: any) => {
    //   console.log(data);
    // });
  }
}
