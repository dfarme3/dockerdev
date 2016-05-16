import {Component, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {OdinService } from '../../services/odin/odin.service';


@Component({
    selector: 'student_profile',
    directives: [StudentProfile],
    template: `
<h2 class="heading">Student Profile</h2>
    `,
    providers: [OdinService]
})

export class StudentProfile {
	constructor() {

	}
}