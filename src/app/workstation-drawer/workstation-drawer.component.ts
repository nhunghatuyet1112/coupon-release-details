import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Workstation } from '../DTO/DTO3p-workstation.dto';

@Component({
  selector: 'app-workstation-drawer',
  templateUrl: './workstation-drawer.component.html',
  styleUrls: ['./workstation-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorkstationDrawerComponent {
  ////DROPDOWN LIST DATA
  ///////////DEPENDENT PLACE
  @Input() dependentPlaceData: Array<{ text: string; value: number }> = [
  ]

  @Input() selectedPlace = 0;
  ///////////DEPENDENT PLACE

  ///////////CITY, DISTRICT, WARD
  @Input() citiesData: Array<{ text: string; value: number }> = [];
  @Input() selectedCity = 0;

  @Input() districtsData: Array<{ text: string; value: number }> = [];
  @Input() selectedDistrict = 0;

  @Input() wardsData: Array<{ text: string; value: number }> = [];
  @Input() selectedWard = 0;

  @Input() Status: Array<{ text: string; value: number }> = [];
  @Input() selectedStatus = 0;

  ///////////CITY, DISTRICT, WARD
  ////DROPDOWN LIST DATA

  //DRAWER DATA
  @Input() WorkstationData: Workstation = {
    name: '',
    code: '',
    shortName: '',
    dependentPlace: this.selectedPlace,
    address: '',
    city: this.selectedCity,
    district: this.selectedDistrict,
    ward: this.selectedWard,
    descr: '',
    status: this.selectedStatus
  }
  //DRAWER DATA

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
