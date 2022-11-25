import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaskingComponent } from './createasking.component';

describe('CreateaskingComponent', () => {
  let component: CreateaskingComponent;
  let fixture: ComponentFixture<CreateaskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaskingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
