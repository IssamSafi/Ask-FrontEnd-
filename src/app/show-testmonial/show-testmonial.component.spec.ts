import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTestmonialComponent } from './show-testmonial.component';

describe('ShowTestmonialComponent', () => {
  let component: ShowTestmonialComponent;
  let fixture: ComponentFixture<ShowTestmonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTestmonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTestmonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
