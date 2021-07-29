import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList: Employee[] = [
    { empId: 101, empName: 'Prachi', empSal: 50000 },
    { empId: 102, empName: 'Laksh', empSal: 60000 },
    { empId: 103, empName: 'Anobhama', empSal: 70000 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
