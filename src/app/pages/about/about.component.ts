import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  developers: Array<{ name: string; role: string; selfDescription: string; }> = [
    {
      name: "Andrew Baker",
      role: "GAN Developer",
      selfDescription: "hello"
    },
    {
      name: "Jacob Brink",
      role: "Web Developer",
      selfDescription: "Who reads these things anyways?"
    },
    {
      name: "Won Seok Park",
      role: "GAN Developer",
      selfDescription: "hi"
    }
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
