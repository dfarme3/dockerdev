import {Component, Input} from '@angular/core';
import {Organization} from '../../model/organization';
import {OrganizationEdit} from './organization_edit';

@Component({
    selector: 'organization_treeview',
    templateUrl: './app/components/organization/organization_treeview.html',
    directives: [OrganizationTreeview, OrganizationEdit]
})

export class OrganizationTreeview {
    @Input() organizations: Array<Organization>;
    @Input() getOdinData: string;
}