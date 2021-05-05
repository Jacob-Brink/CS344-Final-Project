import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPauseComponent } from './scroll-pause.component';

describe('ScrollPauseComponent', () => {
  let component: ScrollPauseComponent;
  let fixture: ComponentFixture<ScrollPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollPauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
