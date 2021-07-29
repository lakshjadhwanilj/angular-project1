import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycompo',
  templateUrl: './mycompo.component.html',
  styleUrls: ['./mycompo.component.css']
})
export class MycompoComponent implements OnInit {

  mymsg: string = 'I created first component in Angular'
  
  constructor() { }

  ngOnInit(): void {
  }

}
