import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-viewer',
  templateUrl: './gallery-viewer.component.html',
  styleUrls: ['./gallery-viewer.component.scss']
})
export class GalleryViewerComponent implements OnInit {

  isWalking: boolean = false;
  hasOuter: boolean = false;

  @Input()
  skinImage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
