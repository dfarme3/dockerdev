interface organization_name {
    node_id: number;
    parent_node_id: number;
    organization_type_id?: number;
    lang: string;
    name: string;
}

export class Organization{
    public node_id: number;
    public parent_node_id: number;
    public name: string; //throw the current lang name in here default=EN
    public is_active: boolean;
    public date_created: Date;
    
    languages: Array<Organization>
    organizations: Array<Organization>;
    
    
    expanded: boolean;
    public checked: boolean;

    constructor(name, id, parent_id,  organizations) {
        this.name = name;
        this.node_id = id;
        this.parent_node_id = parent_id;
        this.organizations = organizations;
        this.expanded = false;
        this.checked = false;
    }
    
    getIcon(){
        if(this.expanded){
            return '-';
        }
        return '+';
    }


    toggle() {
        this.expanded = !this.expanded;
    }

    check(){
        let newState = !this.checked;
        this.checked = newState;
        this.checkRecursive(newState);
    }

    checkRecursive(state){
        this.organizations.forEach(d => {
            d.checked = state;
            d.checkRecursive(state);
        } )
    }
    
    add() {
        console.log("clicked add button");
        // $("#organizationTypeEditModal").modal('show');
        // .modal() //
    }
}