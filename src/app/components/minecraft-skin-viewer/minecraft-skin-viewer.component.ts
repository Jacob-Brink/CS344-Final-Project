import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
let skinview3d = require('skinview3d');

@Component({
  selector: 'app-minecraft-skin-viewer',
  templateUrl: './minecraft-skin-viewer.component.html',
  styleUrls: ['./minecraft-skin-viewer.component.scss']
})
export class MinecraftSkinViewerComponent implements OnInit {

  safeToAdjustSize: boolean = false;
  viewportWidth: number = 20;
  viewportHeight: number = 20;
  minWidth: number = 30*4;
  minHeight: number = 40*4;

  skinViewer: any = null;

  constructor() { }

  ngAfterViewInit() {
    setInterval(() => {
      this.safeToAdjustSize = true;
    }, 200);
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {
    console.log("Whee")
    this.skinViewer.width = window.innerWidth * (this.viewportWidth / 100) + this.minWidth;
    this.skinViewer.height = window.innerWidth * (this.viewportHeight / 100) + this.minHeight;
  }

  // https://github.com/bs-community/skinview3d
  ngOnInit(): void {
    this.skinViewer = new skinview3d.SkinViewer({
      canvas: document.getElementById("skin_container"),
      skin: "/assets/images/skin.png"
    });
  
    // Load another skin
    this.skinViewer.loadSkin("img/skin2.png");
  
    // Unload(hide) the cape / elytra
    this.skinViewer.loadCape(null);
    
    // set the background color
    this.skinViewer.renderer.setClearColor(0x000000);
  
    // Control objects with your mouse!
    let control = skinview3d.createOrbitControls(this.skinViewer);
    control.enableRotate = false;
    control.enableZoom = false;
    control.enablePan = false;
  
    // Add an animation
    let walk = this.skinViewer.animations.add(skinview3d.WalkingAnimation);
    // Add another animation
    let rotate = this.skinViewer.animations.add(skinview3d.RotatingAnimation);
    // Remove an animation, stop walking dude
    //walk.remove();
    // Remove the rotating animation, and make the player face forward
    //rotate.resetAndRemove();
    // And run for now!
    let run = this.skinViewer.animations.add(skinview3d.RunningAnimation);
  
    // Set the speed of an animation
    run.speed = 0.2;
    // Pause single animation
    run.paused = true;
    // Pause all animations!
    //skinViewer.animations.paused = true;
  }

}
