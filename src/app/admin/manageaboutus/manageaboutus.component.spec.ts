import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageaboutusComponent } from './manageaboutus.component';

describe('ManageaboutusComponent', () => {
  let component: ManageaboutusComponent;
  let fixture: ComponentFixture<ManageaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageaboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
