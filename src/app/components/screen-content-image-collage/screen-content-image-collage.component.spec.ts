import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenContentImageCollageComponent } from './screen-content-image-collage.component';

describe('ScreenContentImageCollageComponent', () => {
  let component: ScreenContentImageCollageComponent;
  let fixture: ComponentFixture<ScreenContentImageCollageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenContentImageCollageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenContentImageCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
