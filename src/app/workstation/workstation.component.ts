import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Workstation, WORKSTATION } from '../DTO/DTO3p-workstation.dto';
import { RowClassArgs } from '@progress/kendo-angular-treelist';
import * as $ from 'jquery';

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorkstationComponent implements OnInit, AfterViewInit {
  ///////////////////////////////////VARIABLES///////////////////////////////////
  //////////////////TREE LIST
  public expanded = false;

  public listData: Workstation[] = WORKSTATION;

  public rowCallBack(context: RowClassArgs) {
    const isVP = context.dataItem.code === 'VP';
    const isVPChild = context.dataItem?.dependentPlace === 'Văn phòng';
    const isDP = context.dataItem.code === 'DP';
    const isDPChild = context.dataItem?.dependentPlace === 'Kho'

    return {
      vp: isVP,
      dp: isDP,
      vpChild: isVPChild,
      dpChild: isDPChild
    }
  }
  //////////////////TREE LIST

  //////////////////DRAWER
  //DATA PASS TO DRAWER COMPONENT
  public dependentPlace = [
    { text: 'Văn phòng', value: 0 },
    { text: 'Kho', value: 1 }
  ]

  public citiesData = [
    { text: 'TP. Hồ Chí Minh', value: 0 }
  ]

  public districtsData = [
    { text: 'Quận Gò Vấp', value: 0 }
  ]

  public wardsData = [
    { text: 'Phường 5', value: 0 }
  ]

  public status = [
    { text: 'Đang áp dụng', value: 0 }
  ]
  //DATA PASS TO DRAWER COMPONENT

  public workstationData = new Workstation('Văn phòng 40', 'VP04', 'VP Head', 0, '40 đường số 14', 0, 0, 0, '', 0)
  //////////////////DRAWER
  ///////////////////////////////////VARIABLES///////////////////////////////////

  ///////////////////////////////////FUNCTIONS///////////////////////////////////
  //PASS TO DRAWER COMPONENT
  public closeDrawer(drawer: any) {
    drawer.toggle()
  }

  public submitDrawer(drawer: any) {
    drawer.toggle()
  }
  //PASS TO DRAWER COMPONENT
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    // $(document).ready(() => {
    //   $('.k-table-row.vp .k-i-caret-alt-down.k-icon').addClass('fa-solid');
    //   $('.k-table-row.dp .k-i-caret-alt-down.k-icon').addClass('fa-solid');
    // })
  }
  ///////////////////////////////////FUNCTIONS///////////////////////////////////

}
