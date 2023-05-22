import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListDepartmentTreeData } from './dto/DTOListDepartmentTree';
import { Offset } from '@progress/kendo-angular-popup';
import { ListDepartmentStructure } from './dto/DTOListDepartment';
import { DepartmentServiceService } from './services/department-service/department-service.service';
import { switchMap } from 'rxjs/operators';
import { SelectableSettings, SelectionChangeEvent } from '@progress/kendo-angular-treelist';
import { ListPosition } from './dto/DTOListPosition';


@Component({
  selector: 'app-hr-structure',
  templateUrl: './hr-structure.component.html',
  styleUrls: ['./hr-structure.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HrStructureComponent implements OnInit {
  constructor(public departmentService: DepartmentServiceService) { }
  ////////////////////////////VARIABLES///////////////////////////////

  //TREELIST DATA
  public listData: any[];
  public selectedDepartment;
  public newDepartment: ListDepartmentStructure = new ListDepartmentStructure();
  public selectedDepartmentSetting: SelectableSettings = {
    enabled: true,
    mode: 'row',
    multiple: false,
    drag: false,
    readonly: false,
  }
  public selectedRow: any[] = [];
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
  //////DEPARTMENT DROPDOWNLIST
  public listDepartments: Array<{ text: string, value: number }> = [];
  public temporaryListDepartments: Array<{ text: string, value: number }> = [];
  public selectedDepartmentDropdown: { text: string, value: number };
  //////DEPARTMENT DROPDOWNLIST

  //////LOCATION MULTISELECT
  public listLocations: Array<{ text: string, value: number }> = [];
  public selectedLocations: { text: string, value: number }[] = [{ text: '', value: null }];

  public changeItem(value: any) {
    this.selectedLocations = value;
  }
  //////LOCATION MULTISELECT
  //PASS TO DEPARTMENT DRAWER COMPONENT

  //PASS TO POSITION DRAWER COMPONENT
  public listPositions: Array<string> = [];
  public selectedPosition: string;
  public newPosition: ListPosition;
  //PASS TO POSITION DRAWER COMPONENT

  ////////////////////////////VARIABLES///////////////////////////////

  ////////////////////////////FUNCTIONS///////////////////////////////
  ////TREELIST

  //GET TOKEN & LIST DEPARTMENT TREE API
  getTokenAndListDepartmentTree() {
    this.departmentService.getToken().pipe(
      switchMap(() => this.departmentService.getListDepartmentTree())
    ).subscribe(
      (list: any) => {
        if (list.StatusCode === 0) {
          this.listData = [...list.ObjectReturn];
        }
        else {
          this.listData = [...ListDepartmentTreeData.ObjectReturn];
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getTokenAndListDepartmentTree();
  }
  //GET TOKEN & LIST DEPARTMENT TREE API

  //GET LIST DEPARTMENT
  public getListDepartment(code: any) {
    this.departmentService.getListDepartment({ Code: code }).subscribe((response: any) => {
      let arr = [...response.ObjectReturn];
      let selectedItem = arr.find((item: any) =>
        item.Code === this.newDepartment.ParentID);

      // Department Value hiện tại của item được chọn
      if (selectedItem) {
        this.selectedDepartmentDropdown = {
          text: selectedItem.Department,
          value: selectedItem.Code
        };
      } else {
        // Nếu không tìm thấy phần tử trong arr, gán giá trị mặc định cho selectedDepartmentDropdown
        this.selectedDepartmentDropdown = {
          text: '--Chọn--', // Giá trị mặc định khi không có phần tử tương ứng
          value: null // Giá trị mặc định khi không có phần tử tương ứng
        };
      }
      arr.forEach((item: any) => {
        let newItem = {
          text: item.Department,
          value: item.Code
        };
        this.listDepartments.push(newItem);
      });
    },
      (error) => {
        console.log(error)
      })
  }
  //GET LIST DEPARTMENT

  //GET LIST LOCATION
  public getListLocation(code: any) {
    this.departmentService.getListLocation({ Code: code }).subscribe((response: any) => {
      let arr = [...response.ObjectReturn];
      arr.forEach((item: any) => {
        let newItem = {
          text: item.LocationName,
          value: item.Code
        };
        // Kiểm tra nếu đối tượng đã tồn tại trong mảng listItems
        let existingItem = this.listLocations.find(
          (existingItem) =>
            existingItem.text === newItem.text && existingItem.value === newItem.value
        );

        // Nếu đối tượng chưa tồn tại, thêm vào mảng listItems
        if (!existingItem) {
          this.listLocations.push(newItem);
        }
      });
    })
  }
  //GET LIST LOCATION

  //GET LIST POSITION
  public getListPosition(departmentID: any) {
    this.departmentService.getListPosition({ DepartmentID: departmentID }).subscribe((position: any) => {
      if (position.StatusCode === 0) {
        let arr = [...position.ObjectReturn];
        this.listPositions = arr.map((item: any) => item.Position);
      }
    },
      (error) => {
        console.log(error)
      }
    )
  };
  //GET LIST POSITION

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
  //SELECT ROW
  public onChangeRow(event: SelectionChangeEvent) {
    let selectedItem = event.items;
    if (selectedItem.length > 0) {
      this.selectedDepartment = selectedItem[0].dataItem
    }
    console.log(this.selectedDepartment)
  }
  //SELECT ROW
  //CLASS FOR DEPARTMENT
  isDepartment(item: any): boolean {
    return !!item.Department;
  }
  //CLASS FOR DEPARTMENT

  //OPEN POPUP
  public onOpenPopup(cell: any, item: any): void {
    this.selectedDepartment = { ...item }
    this.offset = { left: (cell.offsetLeft - 164), top: (cell.offsetTop + 86) };
    this.isPopupHidden = true;
  }
  //OPEN POPUP
  ////TREELIST

  //CHECK TO OPEN DRAWER
  public checkDrawer(departmentDrawer: any, positionDrawer: any) {
    this.selectedDepartment.Position ? this.openEditPositionDrawer(positionDrawer) : this.openEditDepartmentDrawer(departmentDrawer);
  }
  //CHECK TO OPEN DRAWER

  //OPEN ADD & EDIT DEPARTMENT DRAWER
  public openAddDepartmentDrawer(departmentDrawer: any, buttonId: string): void {
    if (buttonId === 'addNewDepartment' || buttonId === 'addNewDepartment1') {
      if (this.selectedDepartment.hasOwnProperty('Position')) {
        this.newDepartment.ParentID = this.selectedDepartment.DepartmentID;
      }
      else if (this.selectedDepartment.hasOwnProperty('Department')) {
        this.newDepartment.ParentID = this.selectedDepartment.ParentID;
      }
      else {
        this.newDepartment.ParentID = 1;
      }
    }
    else if (buttonId === 'addNewDepartmentChild' || buttonId === 'addNewDepartmentChild1') {
      if (this.selectedDepartment.hasOwnProperty('Position')) {
        this.newDepartment.ParentID = this.selectedDepartment.DepartmentID;
      }
      else if (this.selectedDepartment.hasOwnProperty('Department')) {
        this.newDepartment.ParentID = this.selectedDepartment.Code;
      }
      else {
        this.newDepartment.ParentID = 1;
      }
    }
    this.getListDepartment(0);
    this.getListLocation(0);
    this.buttonText = 'THÊM MỚI';
    departmentDrawer.toggle();
  }

  public openEditDepartmentDrawer(departmentDrawer: any) {
    this.newDepartment = { ...this.selectedDepartment }
    this.getListDepartment(this.newDepartment.Code);
    this.getListLocation(0);
    this.buttonText = 'CẬP NHẬT';
    departmentDrawer.toggle();
  }

  //OPEN ADD & EDIT DEPARTMENT DRAWER

  //OPEN ADD & EDIT POSITION DRAWER
  public openAddPositionDrawer(positionDrawer: any) {
    let Code = 0;
    let departmentID: number;
    this.newPosition = new ListPosition();
    if (this.selectedDepartment === undefined) {
    }
    else if (this.selectedDepartment.hasOwnProperty('Position')) {
      this.newPosition.DepartmentID = this.selectedDepartment.DepartmentID;
      departmentID = this.newPosition.DepartmentID;
    }
    else if (this.selectedDepartment.hasOwnProperty('Department')) {
      this.newPosition.DepartmentID = this.selectedDepartment.Code;
      departmentID = this.newPosition.DepartmentID;
    }
    this.getListDepartment(Code);
    this.getListPosition(departmentID);
    this.getListLocation(0);
    this.buttonText = 'THÊM MỚI';
    positionDrawer.toggle()
  }

  // public onChangePosition(value: any) {
  //   console.log(value)
  // }

  public onChangeDepartment(dp: { text: string, value: number }): void {
    this.newDepartment.ParentID = dp.value;
    this.getListPosition(dp.value);
  }

  public openEditPositionDrawer(positionDrawer: any) {
    this.newPosition = { ...this.selectedDepartment }
    this.getListPosition(this.newPosition.DepartmentID);
    this.getListDepartment(0);
    this.getListLocation(0);
    this.buttonText = 'CẬP NHẬT';
    positionDrawer.toggle()
  }
  //OPEN ADD & EDIT POSITION DRAWER

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


  ////////////////////////////FUNCTIONS///////////////////////////////
}
