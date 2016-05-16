
import {Component} from '@angular/core';
import { OdinService } from '../../services/odin/odin.service';

@Component({
    selector: 'organization_type_edit',
    templateUrl: './app/components/organization_type.edit.html',
    providers: [OdinService]

})

export class AppComponent {
    getOdinData:string;
    postOdinData:string;

    lang:string;
    name:string;
    private _modelRoute: string = '/organizationTypes';

    constructor(private _OdinService:OdinService){
    }

    getDataFromServer (){
        this._OdinService.getOdin(this._modelRoute)
            .subscribe(
                data => this.getOdinData = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP GET Service"), // in case of failure show this message
                () => console.log("Job Done Get !")//run this code in all cases
            );
    }
    postDataToServer (){
        this._OdinService.postOdin(this.lang,this.name).subscribe(//call the post
                data => this.postOdinData = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );
    }
}