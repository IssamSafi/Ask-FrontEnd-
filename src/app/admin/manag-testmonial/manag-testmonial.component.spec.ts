import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagTestmonialComponent } from './manag-testmonial.component';

describe('ManagTestmonialComponent', () => {
  let component: ManagTestmonialComponent;
  let fixture: ComponentFixture<ManagTestmonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagTestmonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagTestmonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
