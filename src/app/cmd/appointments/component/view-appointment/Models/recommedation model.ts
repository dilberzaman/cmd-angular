export class recommendation{
   RecommendationId:number
   DoctorId :number
   PatientId:number
    constructor( RecommendationId:number,
        DoctorId :number,
        PatientId:number)
        {
            this.RecommendationId=RecommendationId;
            this.DoctorId= DoctorId;
            this.PatientId=PatientId
            
           
        }
}