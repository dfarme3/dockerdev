import { Component } from '@angular/core';
import { Tab } from './tab';
import { NgFor} from "@angular/common";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html',
  directives: [NgFor]
})

export class Tabs {

  tabs: Tab[];

  constructor() {
    this.tabs = [];
  }
  selectTab(tab){

    _deactivateAllTabs(this.tabs);
    tab.active = true;

    function _deactivateAllTabs(tabs: Tab[]){
      tabs.forEach((tab)=>tab.active = false);
    }

  }
  // _deactivateAllTabs(){
  //   this.tabs.forEach((tab)=>tab.active = false);
  // }

  addTab(tab: Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}
