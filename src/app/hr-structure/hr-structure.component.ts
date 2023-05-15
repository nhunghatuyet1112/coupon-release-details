import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListDepartmentTreeData } from './dto/DTOListDepartmentTree';
import { Offset } from '@progress/kendo-angular-popup';
import { ListDepartmentStructure } from './dto/DTOListDepartment';


@Component({
  selector: 'app-hr-structure',
  templateUrl: './hr-structure.component.html',
  styleUrls: ['./hr-structure.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HrStructureComponent implements OnInit {
  ////////////////////////////VARIABLES///////////////////////////////

  //TREELIST DATA
  public listData: any[] = ListDepartmentTreeData.ObjectReturn;
  //TREELIST DATA

  //DRAWER
  public departmentDrawerExpanded = false;
  public positionDrawerExpanded = false;
  //DRAWER

  //TREELIST POPUP
  public isPopupHidden = false;
  public offset: Offset;
  //TREELIST POPUP

  //PASS TO DEPARTMENT DRAWER COMPONENT
  buttonText = '';
  //PASS TO DEPARTMENT DRAWER COMPONENT

  ////////////////////////////VARIABLES///////////////////////////////

  ////////////////////////////FUNCTIONS///////////////////////////////

  //TREELIST

  //FETCH CHILDREN
  public fetchChildren = (dataItem: ListDepartmentStructure): any[] => {
    const children: any[] = [];

    if (dataItem.ListPosition) {
      children.push(...dataItem.ListPosition);
    }

    if (dataItem.ListDepartment) {
      children.push(...dataItem.ListDepartment);
    }
    return children;
  }
  //FETCH CHILDREN


  //CHECK IF HAS CHILDREN
  public hasChildren = (item: ListDepartmentStructure): boolean => {
    return (item.ListDepartment && item.ListDepartment.length > 0) || (item.ListPosition && item.ListPosition.length > 0);
  }
  //CHECK IF HAS CHILDREN

  //CLASS FOR DEPARTMENT
  isDepartment(item: any): boolean {
    return !!item.Department;
  }
  //CLASS FOR DEPARTMENT

  //OPEN POPUP
  public onOpenPopup(cell: any, item: any): void {
    this.offset = { left: (cell.offsetLeft - 164), top: (cell.offsetTop + 86) };
    this.isPopupHidden = true;
    console.log(item)
  }
  //OPEN POPUP

  //TREELIST

  //OPEN DRAWER
  public openAddDrawer(drawer: any): void {
    this.buttonText = 'THÊM MỚI';
    drawer.toggle();
  }

  public openEditDrawer(drawer: any): void {
    this.buttonText = 'CẬP NHẬT';
    drawer.toggle();
  }

  //OPEN DRAWER

  //PASS TO DEPARTMENT DRAWER COMPONENT
  public closeDrawer(drawer: any) {
    this.isPopupHidden = false;
    drawer.toggle()
  }

  public submitDrawer(drawer: any) {
    this.isPopupHidden = false;
    drawer.toggle()
  }
  //PASS TO DEPARTMENT DRAWER COMPONENT
  ngOnInit(): void {
  }

  ////////////////////////////VARIABLES///////////////////////////////
}
