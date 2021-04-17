import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseScreenFocusComponent } from './showcase-screen-focus.component';

describe('ShowcaseScreenFocusComponent', () => {
  let component: ShowcaseScreenFocusComponent;
  let fixture: ComponentFixture<ShowcaseScreenFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseScreenFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseScreenFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
