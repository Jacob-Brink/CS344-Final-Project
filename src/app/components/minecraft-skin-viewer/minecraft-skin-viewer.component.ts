import { Component, ElementRef, HostListener, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as THREE from 'three';
let skinview3d = require('skinview3d');

@Component({
  selector: 'app-minecraft-skin-viewer',
  templateUrl: './minecraft-skin-viewer.component.html',
  styleUrls: ['./minecraft-skin-viewer.component.scss']
})
export class MinecraftSkinViewerComponent implements OnInit {

  viewportWidth: number = 3*8;
  viewportHeight: number = 4*8;
  minWidth: number = 30*5;
  minHeight: number = 40*5;

  walk: any = null;
  control: any = null;
  skinViewer: any = null;

  @Input() width: number = -1;
  @Input() height: number = -1;

  _outerEnabled: boolean = false;
  _walkingEnabled: boolean = false;
  _skinImage: string = "/assets/images/skin.jpg"; 

  walkToggleEvent: any = new window.Event('walk-toggle');
  outerToggleEvent: any = new window.Event('outer-toggle');


  @Input() set outerEnabled(value: boolean) {
    this.eventFire(document.getElementById("outer-clicker"), 'click');
  }

  @Input() set walkingEnabled(value: boolean) {
    this.eventFire(document.getElementById("walk-clicker"), 'click');
  };

  @Input() set skinImage(value: string) {
    this._skinImage = value;
    this.skinViewer.loadSkin(this._skinImage);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.walk != null) {
      this.setWalk(true)
      console.log(this.skinViewer);
    }
  }

  constructor() { 
   
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    setTimeout(() => {
      this.resizeViewer();
      this.setup();
    }, 400);
  }

  resizeViewer(): void {
    if (this.width < 0 && this.height < 0) {
      this.skinViewer.width = window.innerWidth * (this.viewportWidth / 100) + this.minWidth;
      this.skinViewer.height = window.innerWidth * (this.viewportHeight / 100) + this.minHeight;
    }    
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {
    this.resizeViewer();
  }

  setWalk: any = null;

  eventFire(el: any, etype: any): void{
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  setup(): void {
    const skinParts = ["head", "body", "rightArm", "leftArm", "rightLeg", "leftLeg"];
		const skinLayers = ["innerLayer", "outerLayer"];

    this.skinViewer = new skinview3d.SkinViewer({
      canvas: document.getElementById("skin_container"),
      skin: this.skinImage,
    });
  
    this.skinViewer.width = this.width;
    this.skinViewer.height = this.height;

    // Load another skin
    this.skinViewer.loadSkin("/assets/images/skin2.png");
  
    // Unload(hide) the cape / elytra
    this.skinViewer.loadCape(null);
    
    // set the background color
    this.skinViewer.renderer.setClearColor(0x000000);
  
    


    // Control objects with your mouse!
    this.control = skinview3d.createOrbitControls(this.skinViewer);
    this.control.enableRotate = true;
    this.control.enableZoom = false;
    this.control.enablePan = false;


    let walk = this.skinViewer.animations.add(skinview3d.WalkingAnimation);
    walk.paused = true;    
    
    let outerEnabled = false;

    document.getElementById("walk-clicker")?.addEventListener("click", () => walk.paused = !walk.paused); // a hack, cuz the library only works when it's functions are called on event
    document.getElementById("outer-clicker")?.addEventListener("click", () => {
      outerEnabled = !outerEnabled;
      for (const part of skinParts) {
					this.skinViewer.playerObject.skin[part][skinLayers[1]].visible = outerEnabled;
          console.log(this.skinViewer.playerObject.skin[part]["outerLayer"].visible)
          console.log(outerEnabled);
			}
    })
    

    // Add an animation
    // this.walk = this.skinViewer.animations.add(skinview3d.WalkingAnimation);
    
    //this.walk.paused = true;
    
    // Add another animation
    //let rotate = this.skinViewer.animations.add(skinview3d.RotatingAnimation);
    // Remove an animation, stop walking dude
    //walk.remove();
    // Remove the rotating animation, and make the player face forward
    //rotate.resetAndRemove();
    // And run for now!
    //let run = this.skinViewer.animations.add(skinview3d.RunningAnimation);
  
    // Set the speed of an animation
    //run.speed = 0.2;
    // Pause single animation
    //run.paused = true;
    // Pause all animations!
    //skinViewer.animations.paused = true;
  }

  // https://github.com/bs-community/skinview3d
  ngOnInit(): void {
    console.log("ngOnInit")
  }

}
