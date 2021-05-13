import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-viewer',
  templateUrl: './gallery-viewer.component.html',
  styleUrls: ['./gallery-viewer.component.scss']
})
export class GalleryViewerComponent implements OnInit {

  isWalking: boolean = false;
  hasOuter: boolean = false;

  @Input() 
  isOpen: boolean = false;

  @Input()
  skinImage: string = '';

  @Output()
  closeEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onEscape(): void {
    this.closeEvent.emit();
  }

}
