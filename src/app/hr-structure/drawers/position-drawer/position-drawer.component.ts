import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MultiSelectComponent, PopupSettings } from '@progress/kendo-angular-dropdowns';
@Component({
  selector: 'app-position-drawer',
  templateUrl: './position-drawer.component.html',
  styleUrls: ['./position-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PositionDrawerComponent {
  //BUTTON TEXT
  @Input() buttonText = '';
  //BUTTON TEXT


  //MULTISELECT
  @Input() listItems: Array<string> = ["Giám đốc"];
  @Input() selectedItems: any[] = [];
  newItem: string;
  @Output() changeItem = new EventEmitter();
  @Output() changeInput = new EventEmitter<any>();

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
  public onChangeItem(value: any) {
    console.log(value);
    this.changeItem.emit(value);
  }
  public onChangeInput(event: any) {
    this.newItem = event
  }

  public addNewRole() {
    this.listItems.push(this.newItem)
    console.log(this.listItems);
  }
  //MULTISELECT
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
}
