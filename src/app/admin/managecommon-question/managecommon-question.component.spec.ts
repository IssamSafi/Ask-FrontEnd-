import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecommonQuestionComponent } from './managecommon-question.component';

describe('ManagecommonQuestionComponent', () => {
  let component: ManagecommonQuestionComponent;
  let fixture: ComponentFixture<ManagecommonQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecommonQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagecommonQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
