import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecommonQuestionComponent } from './createcommon-question.component';

describe('CreatecommonQuestionComponent', () => {
  let component: CreatecommonQuestionComponent;
  let fixture: ComponentFixture<CreatecommonQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecommonQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecommonQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
