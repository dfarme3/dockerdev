
import { Component, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OdinService } from '../../services/odin/odin.service';
import { Organization } from '../../model/organization';
import { Node} from './node';
import { OrganizationTreeview } from './organization_treeview';

// import {ModalConfig, Modal, ICustomModal, ModalDialogInstance} from 'angular2-modal';

// import {OrganizationTypeEdit} from './organization_type_edit';
// import {OrganizationEdit} from './organization_edit';
// import {JSON} from '../../../assets/script.js' //do this in the index.html
// declare var jQuery:any;

@Component({
    selector: 'organization_view',
    // outputs: [myevent],
    directives: [OrganizationTreeview],
    template: `
<h2 class="heading">Organization Treeview</h2>
<!--<button (click)="createOrganizations()">createOrganizations</button>-->
<organization_treeview [organizations]="organizations" [getOdinData]="getOdinData"> </organization_treeview>


    `,
    providers: [OdinService]
})


 export class OrganizationView  implements OnInit {
    getOdinData:string;
    srce: any;
    postOdinData:string;
    organizations: Array<Organization>;
    // public myevent: EventEmitter = new EventEmitter();
	private _modelRoute: string = '/organizations';

    constructor(
          private _OdinService:OdinService
    ){
        // this.getDataFromServer();
        
        //this.createOrganizations();
 
    }
    
    
    ngOnInit() {
        console.log("ov.getOdinData.OnInit= " + this.getOdinData);

         var src = ([
             { "lang": "EN", "types_id": 1, "is_active": true, "parent_id": 1, "date_created": "2016-03-30T13:44:52.405921", "id": 1, "full_path": "full_path", "name": "Organization_names" },
             { "lang": "FR", "types_id": 1, "is_active": true, "parent_id": 1, "date_created": "2016-03-30T13:44:52.405921", "id": 1, "full_path": "plein_chemin", "name": "Organisation_noms" },
             { "lang": "EN", "types_id": 2, "is_active": true, "parent_id": 1, "date_created": "2016-03-30T13:44:52.405921", "id": 2, "full_path": "full_path", "name": "Sun" },
             { "lang": "FR", "types_id": 2, "is_active": true, "parent_id": 1, "date_created": "2016-03-30T13:44:52.405921", "id": 2, "full_path": "plein_chemin", "name": "Soleil" },
             { "lang": "EN", "types_id": 2, "is_active": true, "parent_id": 1, "date_created": "2016-03-30T13:44:52.405921", "id": 4, "full_path": "full_path", "name": "Star" },
             { "lang": "FR", "types_id": 2, "is_active": true, "parent_id": 1, "date_created": "2016-03-30T13:44:52.405921", "id": 4, "full_path": "plein_chemin", "name": "Etoile" },

             { "lang": "EN", "types_id": 1, "is_active": true, "parent_id": 2, "date_created": "2016-03-30T13:44:52.405921", "id": 3, "full_path": "full_path", "name": "Moon" },
             { "lang": "FR", "types_id": 1, "is_active": true, "parent_id": 2, "date_created": "2016-03-30T13:44:52.405921", "id": 3, "full_path": "plein_chemin", "name": "Lune" },
             { "lang": "EN", "types_id": 1, "is_active": true, "parent_id": 2, "date_created": "2016-03-30T13:44:52.405921", "id": 5, "full_path": "full_path", "name": "Earth" },
             { "lang": "FR", "types_id": 1, "is_active": true, "parent_id": 2, "date_created": "2016-03-30T13:44:52.405921", "id": 5, "full_path": "plein_chemin", "name": "Terre" },

             { "lang": "EN", "types_id": 1, "is_active": true, "parent_id": 2, "date_created": "2016-03-30T13:44:52.405921", "id": 6, "full_path": "full_path", "name": "Mars" },
             { "lang": "EN", "types_id": 1, "is_active": true, "parent_id": 2, "date_created": "2016-03-30T13:44:52.405921", "id": 7, "full_path": "full_path", "name": "Venus" },
         ]);
        
        var orgs = [];
        var srce = _.where(src , {lang: "EN"});
        this.srce = _.sortBy(srce, "parent_id");    

        this.createOrgs();    
        // modal.alert()
        //     .title('Hello World')
        //     .body('In Angular 2')
        //     .open();
    }

    ngAfterContentChecked() {
        console.log("ov.getOdinData.AfterContentChecked= " + this.getOdinData);       
    }


    
    firemyevent(evt){      
    }
    
    
    getDataFromServer (){
        this._OdinService.getOdin(this._modelRoute)
            .subscribe(
                data => this.getOdinData = JSON.stringify(data),
                error => console.log("Error in HTTP GET Service call"),
                () => console.log("ov.getOdinAll=" + this.getOdinData) //+ this.getOdinData
            );
    }
    
    ngAfterViewInit(){
        console.log("ov.getOdinData.AfterViewInit= " + this.getOdinData);

        
    }




    
    getChildren(array, parent) { //find all the children for this parent and stuffs them in the parent
        
        var orgcs = [];
        
        //walk the whole array and find any children of this parent
        for (var k=0; k<array.length; k++){ 
            var src = array[k];
            console.log("src.parent_id=" + src.parent_id + " parent.node_id=" + parent.node_id);
            if (src.parent_id == parent.node_id && src.id != parent.node_id) {
                var orgc = new Organization(src.name, src.id, src.parent_id, [])
                console.log("inGetChildren.orgc=" + JSON.stringify(orgc))
                //this.getChildren(array, orgc )

                orgcs.push(orgc); //add this child to the children array
            }
        }
       
        console.log("inGetChildren.orgcs=" + JSON.stringify(orgcs));  
        
        if( !_.isEmpty( orgcs )  ){
            parent["organizations"] = orgcs; //store the children array in the parent            
            console.log("inGetChildren.parent=" + JSON.stringify(parent));                                 
        }
        return parent;
    } 
    
    createOrgs() {
        console.log("srce" + JSON.stringify(this.srce));

        var orgs = [];
        var parent = this.srce[0]; //using the first record as the root
        var orgp = new Organization("Organizations", parent.id, parent.parent_id, []);

        var orgcc = this.getChildren(this.srce, orgp);
        console.log("ov.createOrgs.orgcc=" + JSON.stringify(orgcc));

        orgs.push(orgcc);
        console.log("ov.createOrgs.orgs=" + JSON.stringify(orgs));
 
        this.organizations = orgs;
    }
   
    createOrganizations() {
        var src = ([
        {"lang":"EN","types_id":1,"is_active":true,"parent_id":1,"date_created":"2016-03-30T13:44:52.405921","id":1,"full_path":"full_path","name":"Organization_names"},
        {"lang":"FR","types_id":1,"is_active":true,"parent_id":1,"date_created":"2016-03-30T13:44:52.405921","id":1,"full_path":"plein_chemin","name":"Organisation_noms"},
        {"lang":"EN","types_id":2,"is_active":true,"parent_id":1,"date_created":"2016-03-30T13:44:52.405921","id":2,"full_path":"full_path","name":"Sun"},
        {"lang":"FR","types_id":2,"is_active":true,"parent_id":1,"date_created":"2016-03-30T13:44:52.405921","id":2,"full_path":"plein_chemin","name":"Soleil"},
        {"lang":"EN","types_id":1,"is_active":true,"parent_id":2,"date_created":"2016-03-30T13:44:52.405921","id":3,"full_path":"full_path","name":"Moon"},
        {"lang":"FR","types_id":1,"is_active":true,"parent_id":2,"date_created":"2016-03-30T13:44:52.405921","id":3,"full_path":"plein_chemin","name":"Lune"},
        {"lang":"EN","types_id":2,"is_active":true,"parent_id":1,"date_created":"2016-03-30T13:44:52.405921","id":4,"full_path":"full_path","name":"Star"},
        {"lang":"FR","types_id":2,"is_active":true,"parent_id":1,"date_created":"2016-03-30T13:44:52.405921","id":4,"full_path":"plein_chemin","name":"Etoile"},
        {"lang":"EN","types_id":1,"is_active":true,"parent_id":2,"date_created":"2016-03-30T13:44:52.405921","id":5,"full_path":"full_path","name":"Earth"},
        {"lang":"FR","types_id":1,"is_active":true,"parent_id":2,"date_created":"2016-03-30T13:44:52.405921","id":5,"full_path":"plein_chemin","name":"Terre"},

        {"lang":"EN","types_id":1,"is_active":true,"parent_id":2,"date_created":"2016-03-30T13:44:52.405921","id":6,"full_path":"full_path","name":"Mars"},
        {"lang":"EN","types_id":1,"is_active":true,"parent_id":2,"date_created":"2016-03-30T13:44:52.405921","id":7,"full_path":"full_path","name":"Venus"},
        ]) ;
        
        var orgs = [];
        var srce = _.where(src , {lang: "EN"});
        srce = _.sortBy(srce, "parent_id")
        
        var parent = srce[0];
        var orgp = new Organization(srce[0].id + srce[0].name, srce[0].id, srce[0].parent_id, []);
        var children = _.filter( srce, function(child){ return  child["parent_id"] == srce[0].id; });
        
        if( !_.isEmpty( children )  ){
            var orgcs = [];
            for(var j=0; j<children.length; j++){
                if (children[j]["id"] != orgp["node_id"]) {
                    var orgc = new Organization(children[j].parent_id + children[j].name + children[j].id, children[j].id, children[j].parent_id, [])
                    
                    var orgcc = this.getChildren(srce, children[j]);
                    console.log("orgcc=" + JSON.stringify(orgcc));

                    orgcs.push(orgcc);
                }
            }
            orgp["organizations"] = orgcs;
        }          
        orgs.push(orgp);  
        console.log("ov.createOrganizations.orgs=" + JSON.stringify(orgs));
        this.organizations = orgs;
    }
    

}

