import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageFormComponent } from './mypage-form.component';

describe('MypageFormComponent', () => {
  let component: MypageFormComponent;
  let fixture: ComponentFixture<MypageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
