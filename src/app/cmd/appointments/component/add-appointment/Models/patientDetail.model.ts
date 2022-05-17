export class PatientDetail{
    
        id:number
        patientName:string 
        phoneNumber:string 
  constructor(
    id:number,
    patientName:string, 
    phoneNumber:string
  ){
      this.id=id;
      this.patientName=patientName;
      this.phoneNumber=phoneNumber;
  }
}