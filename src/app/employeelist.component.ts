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
  {code:'emp1', name:'hari', dob:'14/02/1996'},
  {code:'emp2', name:'harideep', dob:'14/03/1996'},
  {code:'emp3', name:'haris', dob:'14/04/1996'}
];
  }
getEmployees(): void{
  this.employees = [
{code:'emp1', name:'hari', dob:'14/02/1996'},
  {code:'emp2', name:'harideep', dob:'14/03/1996'},
  {code:'emp3', name:'haris', dob:'14/04/1996'},
  {code:'emp4', name:'harish', dob:'14/05/1996'}
  ];
  }
  trackCode(index:number,employee:any): string{
    return employee.code
  }
}