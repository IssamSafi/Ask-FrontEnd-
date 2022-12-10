import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecommentsComponent } from './managecomments.component';

describe('ManagecommentsComponent', () => {
  let component: ManagecommentsComponent;
  let fixture: ComponentFixture<ManagecommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagecommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
