import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"patientFilter"
})
export class FilterPatient implements PipeTransform{
    transform(items: any[], value: string) {
        if (!items || !value) {
          return items;
        }
        return items.filter(
          (item) =>
            item.patientName.toString()
              .toLowerCase()
              .includes(value.toString().toLowerCase()) ||
            item.phoneNumber.includes(value)
        );
      }
    
}