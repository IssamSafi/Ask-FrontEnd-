import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarguestComponent } from './navbarguest.component';

describe('NavbarguestComponent', () => {
  let component: NavbarguestComponent;
  let fixture: ComponentFixture<NavbarguestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarguestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
