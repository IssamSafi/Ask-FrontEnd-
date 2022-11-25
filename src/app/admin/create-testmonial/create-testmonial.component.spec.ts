import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestmonialComponent } from './create-testmonial.component';

describe('CreateTestmonialComponent', () => {
  let component: CreateTestmonialComponent;
  let fixture: ComponentFixture<CreateTestmonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTestmonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTestmonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
