import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  template: `
  <style>h2{color:blue;}</style>
  <h2>HI ALL!</h2>`,
  // styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {

  userMessage: string = 'Hi Hello All, Good Afternoon!'
  
  constructor() { }

  ngOnInit(): void {
  }

}
