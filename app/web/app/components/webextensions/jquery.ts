import {Component, ElementRef, OnInit} from '@angular/core'; 
declare var jQuery:any; 

@Component({ 
    selector: 'jquery-integration', 
    templateUrl: './components/jquery-integration/jquery-integration.html' 
}) 

export class JqueryIntegration implements OnInit { 
    elementRef: ElementRef; 
    constructor(elementRef: ElementRef) { 
        this.elementRef = elementRef;
    } 
    
    ngOnInit() { 
        jQuery(this.elementRef.nativeElement).draggable({containment:'#draggable-parent'}); 
    } 
}