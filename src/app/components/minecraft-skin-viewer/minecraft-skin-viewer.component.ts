import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
let skinview3d = require('skinview3d');

@Component({
  selector: 'app-minecraft-skin-viewer',
  templateUrl: './minecraft-skin-viewer.component.html',
  styleUrls: ['./minecraft-skin-viewer.component.scss']
})
export class MinecraftSkinViewerComponent implements OnInit {

  constructor() { }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    let skinViewer = new skinview3d.SkinViewer({
      canvas: document.getElementById("skin_container"),
      width: 300,
      height: 400,
      skin: "/assets/images/skin.png"
    });
  
    // Change viewer size
    skinViewer.width = 500;
    skinViewer.height = 700;
  
    // Load another skin
    skinViewer.loadSkin("img/skin2.png");
  
    // Unload(hide) the cape / elytra
    skinViewer.loadCape(null);
    
    // set the background color
    skinViewer.renderer.setClearColor(0x000000);
  
    // Control objects with your mouse!
    let control = skinview3d.createOrbitControls(skinViewer);
    control.enableRotate = false;
    control.enableZoom = false;
    control.enablePan = false;
  
    // Add an animation
    let walk = skinViewer.animations.add(skinview3d.WalkingAnimation);
    // Add another animation
    let rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);
    // Remove an animation, stop walking dude
    //walk.remove();
    // Remove the rotating animation, and make the player face forward
    //rotate.resetAndRemove();
    // And run for now!
    let run = skinViewer.animations.add(skinview3d.RunningAnimation);
  
    // Set the speed of an animation
    run.speed = 0.2;
    // Pause single animation
    run.paused = true;
    // Pause all animations!
    //skinViewer.animations.paused = true;
  }

}
