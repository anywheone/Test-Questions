import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestItemComponent } from './create-test-item.component';

describe('CreateTestItemComponent', () => {
  let component: CreateTestItemComponent;
  let fixture: ComponentFixture<CreateTestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTestItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
