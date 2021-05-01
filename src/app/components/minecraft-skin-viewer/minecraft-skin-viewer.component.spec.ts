import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinecraftSkinViewerComponent } from './minecraft-skin-viewer.component';

describe('MinecraftSkinViewerComponent', () => {
  let component: MinecraftSkinViewerComponent;
  let fixture: ComponentFixture<MinecraftSkinViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinecraftSkinViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinecraftSkinViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
