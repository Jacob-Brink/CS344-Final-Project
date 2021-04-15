import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModeCollapseShowcaseComponent } from './mode-collapse-showcase.component';

describe('ModeCollapseShowcaseComponent', () => {
  let component: ModeCollapseShowcaseComponent;
  let fixture: ComponentFixture<ModeCollapseShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeCollapseShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeCollapseShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
