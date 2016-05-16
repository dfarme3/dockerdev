import { Component } from '@angular/core';
import {Tabs} from './tabs';

@Component({
  selector: 'tab',
  inputs: [
    'title:tabTitle',
    'active'
  ],
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  templateUrl: 'tab.html'
})
export class Tab {
  title: string;
  active = this.active || false;

  constructor(tabs: Tabs){

   tabs.addTab(this);

  }
}