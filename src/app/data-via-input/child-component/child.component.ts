import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Child {{ childMessage }}

      <input type="text" [(ngModel)]="childMessage" (ngModelChange)="log($event)"/>
  `,
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string = "";

  childMessageLocal: string = "";

  ngOnInit(): void {
    this.childMessageLocal = this.childMessage;
  }
  
  log(message: any) {
    this.childMessage = message;
  }

  constructor() { }
}