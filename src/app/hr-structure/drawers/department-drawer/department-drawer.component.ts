import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { PopupSettings } from '@progress/kendo-angular-dateinputs';
import { MultiSelectComponent } from '@progress/kendo-angular-dropdowns';
import * as $ from 'jquery';
@Component({
  selector: 'app-department-drawer',
  templateUrl: './department-drawer.component.html',
  styleUrls: ['./department-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DepartmentDrawerComponent implements OnInit, AfterViewInit {
  ////////////////////////////////////////VARIABLES////////////////////////////////////////
  @Input() Name;
  @Input() Code;
  @Input() ShortName;
  @Input() Phonenumber;
  @Input() Fax;
  @Input() Brief;
  //BUTTON TEXT
  @Input() buttonText = '';
  //BUTTON TEXT

  //DEPARTMENT SELECT
  @Input() listDepartments: Array<{ text: string, value: number }> = [];
  @Input() selectedDepartment: { text: string, value: number } = this.listDepartments[0];
  //DEPARTMENT SELECT

  //LOCATION SELECT
  @Input() listLocations: Array<{ text: string, value: number }> = [];
  @Input() selectedLocations: { text: string, value: number }[] = [this.listLocations[0]];
  @Output() changeItem = new EventEmitter();
  public multiSelectPopup: PopupSettings = {
    appendTo: 'component',
    popupClass: 'multiselect-popup'
  }
  @ViewChild(MultiSelectComponent, { static: false }) multiselect: MultiSelectComponent;

  openMultiselectPopup() {
    this.multiselect.toggle(true);
  }
  preventMultiselectPopup() {
    this.multiselect.toggle(false);
  }
  //LOCATION SELECT
  ////////////////////////////////////////VARIABLES////////////////////////////////////////

  ////////////////////////////////////////FUNCTIONS////////////////////////////////////////
  //CLOSE DRAWER EVENTS AND TEXT VALUE;
  @Output() closeDrawer = new EventEmitter();
  @Output() submitDrawer = new EventEmitter();
  onCloseDrawer(event: any) {
    this.closeDrawer.emit(event);
  }

  onSubmitDrawer(event: any) {
    this.submitDrawer.emit(event);
  }
  //BUTTON EVENTS AND TEXT VALUE;

  //MULTISELECT EVENTS
  public onChangeItem(value: any) {
    this.changeItem.emit(value);
  }
  //MULTISELECT EVENTS

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    $(document).ready(() => {
      $('.k-chip-list').addClass('k-icon')
    })
  }
  ////////////////////////////////////////FUNCTIONS////////////////////////////////////////
}
