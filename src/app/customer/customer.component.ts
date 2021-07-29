import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custList: Customer[] = [
    { custNo: 1, custName: 'Joey', custAdd: 'Mumbai', city: 'Mumbai', country: 'India' },
    { custNo: 2, custName: 'Ross', custAdd: 'New York', city: 'New York', country: 'USA' },
    { custNo: 3, custName: 'Chandler', custAdd: 'Chennai', city: 'Chennai', country: 'India' }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
