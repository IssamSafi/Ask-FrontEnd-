import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutguestComponent } from './aboutguest.component';

describe('AboutguestComponent', () => {
  let component: AboutguestComponent;
  let fixture: ComponentFixture<AboutguestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutguestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
