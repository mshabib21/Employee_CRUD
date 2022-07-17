
 
import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service'; 

@Component({
  templateUrl: './list.component.html',
  selector:'employee-list'


})
export class EmployeeListComponent implements OnInit {

  employees: IEmployee[] = [];

  ngOnInit(): void {

    this.employeeService.findAll().subscribe(employees => {
    
      this.employees = employees;

    })

  }

  constructor(private employeeService: EmployeeService) {

  }
   
  delete(id: any) {

    this.employeeService
      .delete(id)
      .subscribe(() => {
        // update component
        this.employees = this.employees.filter(emp => emp.id !== id)
         
      })
  } 
}
