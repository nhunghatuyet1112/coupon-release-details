import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MultiSelectComponent, PopupSettings } from '@progress/kendo-angular-dropdowns';
@Component({
  selector: 'app-position-drawer',
  templateUrl: './position-drawer.component.html',
  styleUrls: ['./position-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PositionDrawerComponent {
  ///////////////////////////////////VARIABLES///////////////////////////////////
  //TEXTBOXES
  @Input() Position: string;
  @Input() PositionID: string;
  @Input() IsLeader: boolean;
  //TEXTBOXES

  //BUTTON TEXT
  @Input() buttonText = '';
  //BUTTON TEXT

  //DEPARTMENT DROPDOWN
  @Input() listDepartments: Array<{ text: string, value: number }> = [];
  @Input() selectedDepartment: { text: string, value: number };
  @Output() changeDepartment = new EventEmitter();
  //DEPARTMENT DROPDOWN

  //LIST POSITION
  @Input() listPositions: Array<string> = [];
  @Input() selectedPosition: string;
  @Output() changePosition = new EventEmitter();
  //LIST POSITION

  //LIST POSITION GROUP
  @Input() listPositionGroup: Array<{ text: string, value: number }> = [];
  @Input() selectedPositionGroup: { text: string, value: number };
  //LIST POSITION GROUP

  //LIST POSITION ROLE
  newItem: { text: string, value: number };
  @Input() listPositionRoles: Array<{ text: string, value: number }> = [];
  @Input() selectedPositionRoles: Array<{ text: string, value: number }> = [];
  @Output() changeItem = new EventEmitter();
  @Output() changeInput = new EventEmitter<any>();

  public multiSelectPopup: PopupSettings = {
    appendTo: 'component',
    popupClass: 'multiselect-popup'
  }
  //LIST POSITION ROLE

  //STATUS
  @Input() listStatus: Array<{ text: string, value: number }> = [];
  @Input() selectedStatus: { text: string, value: number };
  //STATUS
  ///////////////////////////////////VARIABLES///////////////////////////////////

  ///////////////////////////////////FUCTIONS///////////////////////////////////
  //LIST DEPARTMENT CHANGE VALUE EVENT
  public onChangeDepartment(event: any) {
    this.changeDepartment.emit(event);
  }
  //LIST DEPARTMENT CHANGE VALUE EVENT
  //LIST POSITION DROPDOWN EVENTS
  public onChangePosition(event: any) {
    this.changePosition.emit(event);
  }
  //LIST POSITION DROPDOWN EVENTS

  //LIST POSITION ROLE MULTISELECT EVENTS
  public onChangeItem(value: any) {
    console.log(value);
    this.changeItem.emit(value);
  }
  public onChangeInput(event: any) {
    this.newItem = event
  }


  //LIST POSITION ROLE MULTISELECT EVENTS

  //BUTTON EVENTS AND TEXT VALUE;
  @Output() closeDrawer = new EventEmitter();
  @Output() submitDrawer = new EventEmitter();
  onCloseDrawer(event: any) {
    this.closeDrawer.emit(event);
  }

  onSubmitDrawer(event: any) {
    this.submitDrawer.emit(event);
  }
  //BUTTON EVENTS AND TEXT VALUE;
  ///////////////////////////////////FUCTIONS///////////////////////////////////

}
