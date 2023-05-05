import { Component, ViewEncapsulation } from '@angular/core';
import { Workstation, WORKSTATION } from '../DTO/DTO3p-workstation.dto';
import { RowClassArgs } from '@progress/kendo-angular-treelist';

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorkstationComponent {
  //////////////////TREE LIST
  public expanded = true;

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
}
