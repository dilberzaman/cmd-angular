import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText:string){
    if(value.length === 0 || searchText === ''){
     return value;
    }
 
    const patients = [];
    for(const patient of value){
 
      if(patient.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())){
        patients.push(patient);
      }
    }
    return patients;
  }

}
