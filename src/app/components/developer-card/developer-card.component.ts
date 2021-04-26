import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.scss']
})
export class DeveloperCardComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  role: string;

  @Input()
  selfDescription: string;

  constructor() {
    this.name = this.role = this.selfDescription = "NULL";
  }

  ngOnInit(): void {
  }

}
