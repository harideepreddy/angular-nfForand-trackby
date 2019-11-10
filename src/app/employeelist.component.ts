import { Component } from '@angular/core';
@Component({
selector:'emplist',
templateUrl:'./employeelist.component.html',
styleUrls:['./employeelist.component.css']
})
export class EmployeeListComponent{
  employees: any[];
  constructor(){
this.employees = [
  {code:'emp1', name:'hari', dob:'04/02/1996',salary:'5000'},
  {code:'emp2', name:'harideep', dob:'04/03/1996',salary:'5500'},
  {code:'emp3', name:'haris', dob:'04/04/1996',salary:'5654'}
];
  }
getEmployees(): void{
  this.employees = [
{code:'emp1', name:'hari', dob:'04/02/1996',salary:'5000'},
  {code:'emp2', name:'harideep', dob:'04/03/1996',salary:'5500'},
  {code:'emp3', name:'haris', dob:'04/04/1996',salary:'5654'},
  {code:'emp4', name:'harish', dob:'04/05/1996',salary:'6342'}
  ];
  }
  trackCode(index:number,employee:any): string{
    return employee.code
  }
}