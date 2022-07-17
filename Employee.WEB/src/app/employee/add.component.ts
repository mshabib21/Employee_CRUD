import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { PageState } from './enums.model';

@Component({
  selector: 'add-employee',
  templateUrl: './add.component.html'
})

export class AddEmployeeComponent implements OnInit {

  employeeObj: IEmployee = { id: 0, email: '', name: '', phoneNumber: '', createDate: '2022-07-16' };

  public StateEnum = PageState.create;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {

  }


  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      let id = params.get("id");

      if (id != null)
        this.employeeService.findById(id).subscribe(employee => {

          this.StateEnum = PageState.edit;
          this.employeeObj = employee;
        })

    })


  }

  submitEmployee() {
    //// Validate for valid inputs
    //if (!this.validateFields()) {
    //  return; // Stop execution in case of any validation errors
    //}

    if (this.employeeObj?.id != null && this.StateEnum == PageState.edit) {
      this.employeeService.update(this.employeeObj.id, this.employeeObj).subscribe(data => {
        this.router.navigateByUrl('/empList');
        //this.toastr.success("Employee Updated Successfully!"); // Show success message


      },
        error => {
          // this.toastr.error("Error occured during update!"); // Show error message
        });
    }
    else {

      //Add employee api service call 
      this.employeeService.add(this.employeeObj).subscribe(data => {

        this.router.navigateByUrl('/empList');

      });

    }

  }
   
  validateFields() {
    //if (this.employeeName ) {
    //  return true;
    //}
    //else {
    //  return false;
    //}
  }


} 
