import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-department-drawer',
  templateUrl: './department-drawer.component.html',
  styleUrls: ['./department-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DepartmentDrawerComponent {
  //BUTTON TEXT
  @Input() buttonText = '';
  //BUTTON TEXT

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
