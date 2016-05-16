
import { Component, Input } from '@angular/core';
import { OdinService } from '../../services/odin/odin.service';
import { OrganizationTypeEdit } from './organization_type_edit';
import { Organization } from '../../model/organization';

@Component({
    selector: 'organization_edit',
    templateUrl: './app/components/organization/organization_edit.html',
    directives: [OrganizationEdit, OrganizationTypeEdit],
    providers: [OdinService]

})


export class OrganizationEdit {
    // @Input('organization-name') name:string; 
    @Input() orgname; 
    @Input() org: Organization;
    @Input() organizations: Array<Organization>;
    @Input() getOdinData: string;
   
    //getOdinData:string;
    postOdinData:string;

    public en_name:string;
    fr_name:string;
    type:string;
    id: number;
    date_created: Date;
    is_active: boolean;
    display_visible: boolean;
	private _modelRoute: string = '/organizations';

    constructor(private _OdinService:OdinService){
        this.display_visible = false;
    }
    
    toggleModal() {
        this.display_visible = true;

    }
    
    ngOnInit() {
         this.en_name = this.orgname;
       //this.fr_name = this.getOdinData[""
        console.log("oe.odinData= " + JSON.stringify(this.getOdinData));
        console.log("oe.organizations= " + JSON.stringify(this.organizations));
    }
    
    ngAfterViewInit(){
        
        //find row in parent(orgview) organizations
        //or put it into an organizations class
        console.log("oe.orgname= " + this.orgname);
        console.log("oe.org.node_id= " + this.org["node_id"]);
        console.log("oe.en_name= " + this.en_name);
    }

    ngAfterContentChecked() {
        console.log("oe.getOdinData.After= " + this.getOdinData);
    }    

    getDataFromServer (){
        this._OdinService.getOdin(this._modelRoute)
            .subscribe(
                data => this.getOdinData = JSON.stringify(data),
                error => console.log("Error HTTP GET Service"),
                () => console.log("GET from Odin " + this.getOdinData)
            );
    }
    
    postDataToServer (){
        this._OdinService.postOdin(
            this._modelRoute,
            JSON.stringify(
                {
                     organization: {
                        id: this.id,
                        date_created: this.date_created,
                        is_active: this.is_active,
                        name: [
                                {lang: "EN", name: this.en_name},
                                {lang: "FR", name: this.fr_name}
                            ]
                        }
                }
             )
        ).subscribe(
                data => this.postOdinData = JSON.stringify(data),
                error => console.log("Error HTTP Post Service"),
                () => console.log("POST to Odin " + this.postOdinData)
            );
    }
    
    postUpdateToServer() {
        
        
    }
}