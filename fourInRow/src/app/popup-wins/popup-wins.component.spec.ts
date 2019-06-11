import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWinsComponent } from './popup-wins.component';

describe('PopupWinsComponent', () => {
  let component: PopupWinsComponent;
  let fixture: ComponentFixture<PopupWinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupWinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
