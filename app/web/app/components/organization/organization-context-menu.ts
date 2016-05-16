import {Component, Input} from '@angular/core';

@Component({
    selector: 'organization_context_menu',
    templateUrl: `
    
    <button (click)="clicked($event)"></button>
<ul class="contextmenu">
    <li>Add</li>
    <li>Edit {{name}}</li>
    <li>Delete {{name}}</li>
    <li>View {{name}} </li>
</ul>    
    `
})

export class Organization_Context_Menu {
    @Input() message: string;
    
    clicked(event) {
        event.preventDefault();
    }
    
}