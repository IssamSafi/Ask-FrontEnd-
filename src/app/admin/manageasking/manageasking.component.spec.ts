import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageaskingComponent } from './manageasking.component';

describe('ManageaskingComponent', () => {
  let component: ManageaskingComponent;
  let fixture: ComponentFixture<ManageaskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageaskingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
