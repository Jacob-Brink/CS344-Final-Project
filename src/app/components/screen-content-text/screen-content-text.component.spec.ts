import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenContentTextComponent } from './screen-content-text.component';

describe('ScreenContentTextComponent', () => {
  let component: ScreenContentTextComponent;
  let fixture: ComponentFixture<ScreenContentTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenContentTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenContentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
