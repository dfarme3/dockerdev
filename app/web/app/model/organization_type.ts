///<reference path="organization_type_name.ts" />
interface organization_type_name {
    id?: number;
    organization_type_id?: number;
    lang: string;
    name: string;
}


export class Organization_type {
    public id: number;
    public is_active: boolean;
    public date_created: Date;
    public names: Array<organization_type_name>;
    
    private getOdinData: string;
    private postOdinData: string;
     
   
    postData(data: string) {
        this.postOdinData = data;
        
    }
    
    getJSONData() {
        
        
        return this.getOdinData;
    }
  
}