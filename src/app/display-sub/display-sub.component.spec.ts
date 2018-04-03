import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySubComponent } from './display-sub.component';

describe('DisplaySubComponent', () => {
  let component: DisplaySubComponent;
  let fixture: ComponentFixture<DisplaySubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
