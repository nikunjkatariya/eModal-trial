import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialloginComponent } from './initiallogin.component';

describe('InitialloginComponent', () => {
  let component: InitialloginComponent;
  let fixture: ComponentFixture<InitialloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
