import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterguestComponent } from './footerguest.component';

describe('FooterguestComponent', () => {
  let component: FooterguestComponent;
  let fixture: ComponentFixture<FooterguestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterguestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
