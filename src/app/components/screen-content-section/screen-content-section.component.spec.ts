import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenContentSectionComponent } from './screen-content-section.component';

describe('ScreenContentSectionComponent', () => {
  let component: ScreenContentSectionComponent;
  let fixture: ComponentFixture<ScreenContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenContentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
