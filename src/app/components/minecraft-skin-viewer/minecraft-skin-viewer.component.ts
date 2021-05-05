import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
let skin = require('minecraft-skin');

@Component({
  selector: 'app-minecraft-skin-viewer',
  templateUrl: './minecraft-skin-viewer.component.html',
  styleUrls: ['./minecraft-skin-viewer.component.scss']
})
export class MinecraftSkinViewerComponent implements OnInit {


  @ViewChild('minecraftViewer', { static: false }) minecraftViewer: ElementRef | any;

  setup() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.minecraftViewer.nativeElement.appendChild(renderer.domElement);
    console.log(this.minecraftViewer);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    

    console.log(cube.position);

    var viking = skin(THREE, 'assets/images/skin.png')
    // viking.mesh.position.y = 0;
    // viking.mesh.position.z = 0;
    // viking.mesh.position.x = 0;
    //scene.add(viking.mesh);
    scene.add(cube);
    camera.position.z = 5;

    renderer.render(scene, camera);

    // var animate = function () {
    //   requestAnimationFrame(animate);

    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;

    //   renderer.render(scene, camera);
    // };

    // animate();

  }

  constructor() { }

  ngAfterViewInit() {
    //this.setup();
  }

  ngOnInit(): void {

  }

}
