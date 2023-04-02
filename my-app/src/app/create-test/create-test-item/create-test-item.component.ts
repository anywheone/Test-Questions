import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionModel } from 'src/app/models/somequestions.model';

@Component({
  selector: 'create-test-item',
  templateUrl: './create-test-item.component.html',
  styleUrls: ['./create-test-item.component.css'],
})
export class CreateTestItemComponent {
  @Input() questionModel: QuestionModel = new QuestionModel();
  // @Output() submitQuestionsEvent = new EventEmitter<QuestionModel>();
  // submitQuestionsModel() {
  //   this.submitQuestionsEvent.emit(this.questionModel);
  //   console.debug(this.questionModel);
  // }
}
