export class Node{
    name: string;
    nodes: Array<Node>;
    expanded: boolean;
    public checked: boolean;
    id: number; //could use this as a lookup into tree array class to access record
    parent_id: number; //not needed?

    constructor(name, nodes) {
        this.name = name;
        this.nodes = nodes;
        this.expanded = false;
        this.checked = false;
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
        this.nodes.forEach(d => {
            d.checked = state;
            d.checkRecursive(state);
        } )
    }
}