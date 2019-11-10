import{ Component,Input } from '@angular/core';
@Component({
selector:'empcount',
templateUrl:'./employeecount.component.html',
styleUrls: ['./employeecount.component.css']
})
export class EmployeeCountComponent{
  @Input()
all:number ;
@Input()
male:number ;
@Input()
female:number ;
}