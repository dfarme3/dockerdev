
import {Component, Input} from '@angular/core';
import {OdinService } from '../../services/odin/odin.service';
// import {Organization_Type} from '../../model/organization_type';

@Component({
    selector: 'organization_type_edit',
    templateUrl: './app/components/organization/organization_type_edit.html',
    providers: [OdinService]

})

export class OrganizationTypeEdit {
    
    @Input('organization-type-name')  name:string;
    
    getOdinData:string; 
    postOdinData:string;

    en_name: string;
    fr_name: string;
    id: number;
    date_created: Date;
    is_active: boolean;
    
	private _modelRoute: string = '/organizationTypes';

    constructor(private _OdinService:OdinService){
    }

    getDataFromServer (){
        this._OdinService.getOdin(this._modelRoute)
            .subscribe(
                data => this.getOdinData = JSON.stringify(data),
                error => console.log("Error HTTP GET Service"),
                () => console.log("GET from Odin " +this.getOdinData)
            );
    }

    postDataToServer (){
        
        this._OdinService.postOdin(this._modelRoute,
            //JSON.stringify({"en":this.en_name,"fr":this.fr_name}) //not working until service has been updated
            JSON.stringify( {
                    organization_type: {
                        id: this.id,
                        date_created: this.date_created,
                        name: [
                            {lang: "EN", name: this.en_name},
                            {lang: "FR", name: this.fr_name}
                            ]
                        }
                } ) 
            ).subscribe(
                data => this.postOdinData = JSON.stringify(data),
                error => console.log("Error HTTP Post Service"),
                () => console.log("POST to Odin " + this.postOdinData)
            );
    }
    
    
    
    
}