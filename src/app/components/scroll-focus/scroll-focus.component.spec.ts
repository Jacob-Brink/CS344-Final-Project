import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollFocusComponent } from './scroll-focus.component';

describe('ScrollFocusComponent', () => {
  let component: ScrollFocusComponent;
  let fixture: ComponentFixture<ScrollFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
