
import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name:'employeepipe'
})

export class EmployeePipe implements PipeTransform{
transform(value:string, gender:string): string{
  if(gender.toLowerCase() == 'male'){
    return "Mr " + value;
  }
  if(gender.toLowerCase() == 'female'){
    return "Miss " + value;
  }
}
}