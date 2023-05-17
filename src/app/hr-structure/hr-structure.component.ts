import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListDepartmentTreeData } from './dto/DTOListDepartmentTree';
import { Offset } from '@progress/kendo-angular-popup';
import { ListDepartmentStructure } from './dto/DTOListDepartment';
import { DepartmentServiceService } from './services/department-service/department-service.service';
import * as $ from 'jquery';


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
  public listData: any[] = ListDepartmentTreeData.ObjectReturn;
  public selectedDepartment;
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
  public selectedDepartmentDropdown: { text: string, value: number } = {
    text: '',
    value: null
  };
  //////DEPARTMENT DROPDOWNLIST

  //////LOCATION MULTISELECT
  public listLocations: Array<{ text: string, value: number }> = [];
  public selectedLocations: { text: string, value: number }[] = [{ text: '', value: null }];

  public changeItem(value: any) {
    this.selectedLocations = value;
  }
  //////LOCATION MULTISELECT
  //PASS TO DEPARTMENT DRAWER COMPONENT

  ////////////////////////////VARIABLES///////////////////////////////

  ////////////////////////////FUNCTIONS///////////////////////////////

  ////TREELIST
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
    this.selectedDepartment = item
    this.offset = { left: (cell.offsetLeft - 164), top: (cell.offsetTop + 86) };
    this.isPopupHidden = true;
  }
  //OPEN POPUP
  ////TREELIST

  //OPEN DRAWER
  public openAddDrawer(drawer: any): void {
    if (this.selectedDepartment === undefined) {
      this.selectedDepartment = {};
      this.departmentService.getListDepartment({ Code: 0 }).subscribe((response: any) => {
        let arr = [...response.ObjectReturn];
        let selectedItem = arr.find((item: any) => item.Code === this.selectedDepartment.DepartmentID || this.selectedDepartment.ParentID);

        // Department Value hiện tại của item được chọn
        if (selectedItem) {
          this.selectedDepartmentDropdown = {
            text: selectedItem.Department,
            value: selectedItem.Code
          };
        }

        arr.forEach((item: any) => {
          let newItem = {
            text: item.Department,
            value: item.Code
          };
          // Kiểm tra nếu đối tượng đã tồn tại trong mảng listItems
          let existingItem = this.listDepartments.find(
            (existingItem) =>
              existingItem.text === newItem.text && existingItem.value === newItem.value
          );

          // Nếu đối tượng chưa tồn tại, thêm vào mảng listItems
          if (!existingItem) {
            this.listDepartments.push(newItem);
          }
        });
      },
        (error) => {
          console.log(error)
        })
      this.departmentService.getListLocation({ Code: 0 }).subscribe((response: any) => {
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
    else {
      let code = this.selectedDepartment.Code;
      this.selectedDepartment = {};
      this.departmentService.getListDepartment({ Code: code }).subscribe((response: any) => {
        let arr = [...response.ObjectReturn];
        let selectedItem = arr.find((item: any) => item.Code === this.selectedDepartment.DepartmentID || this.selectedDepartment.ParentID);

        // Department Value hiện tại của item được chọn
        if (selectedItem) {
          this.selectedDepartmentDropdown = {
            text: selectedItem.Department,
            value: selectedItem.Code
          };
        }

        arr.forEach((item: any) => {
          let newItem = {
            text: item.Department,
            value: item.Code
          };
          // Kiểm tra nếu đối tượng đã tồn tại trong mảng listItems
          let existingItem = this.listDepartments.find(
            (existingItem) =>
              existingItem.text === newItem.text && existingItem.value === newItem.value
          );

          // Nếu đối tượng chưa tồn tại, thêm vào mảng listItems
          if (!existingItem) {
            this.listDepartments.push(newItem);
          }
        });
      },
        (error) => {
          console.log(error)
        })
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
    this.buttonText = 'THÊM MỚI';
    drawer.toggle();
  }

  public openEditDrawer(departmentDrawer: any, positionDrawer: any) {
    //Gọi API và thêm vào listDepartments dropdowndata
    this.selectedDepartment.Position ? positionDrawer.toggle() : departmentDrawer.toggle();
    let code = this.selectedDepartment.Code;
    this.departmentService.getListDepartment({ Code: code }).subscribe((response: any) => {
      let arr = [...response.ObjectReturn];
      let selectedItem = arr.find((item: any) => item.Code === this.selectedDepartment.DepartmentID || this.selectedDepartment.ParentID);

      // Department Value hiện tại của item được chọn
      if (selectedItem) {
        this.selectedDepartmentDropdown = {
          text: selectedItem.Department,
          value: selectedItem.Code
        };
      }

      arr.forEach((item: any) => {
        let newItem = {
          text: item.Department,
          value: item.Code
        };
        // Kiểm tra nếu đối tượng đã tồn tại trong mảng listItems
        let existingItem = this.listDepartments.find(
          (existingItem) =>
            existingItem.text === newItem.text && existingItem.value === newItem.value
        );

        // Nếu đối tượng chưa tồn tại, thêm vào mảng listItems
        if (!existingItem) {
          this.listDepartments.push(newItem);
        }
      });
    },
      (error) => {
        console.log(error)
      })
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
    this.buttonText = 'CẬP NHẬT';
    this.listDepartments = [];
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

  ////////////////////////////FUNCTIONS///////////////////////////////
}
