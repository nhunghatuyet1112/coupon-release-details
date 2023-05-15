import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerComponent, DrawerItem, DrawerItemExpandedFn, DrawerMode, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import * as $ from 'jquery';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent {
  public expand = true;
  public selected = 'CHÍNH SÁCH';
  public expandMode: DrawerMode = 'overlay';

  // public items: DrawerItem[] = [
  //   { id: 0, text: 'KHUYẾN MÃI', icon: 'copy' },
  //   { id: 1, text: 'NỘI DUNG WEBSITE', icon: 'copy' },
  //   { id: 2, text: 'QUẢN LÝ BANNER', icon: 'copy' },
  //   { id: 3, text: 'CHÍNH SÁCH', icon: 'copy', selected: true },
  //   { id: 4, parentId: 3, text: 'Coupon', selected: true },
  //   { id: 5, parentId: 3, text: 'Phân nhóm PMH/Coupon' },
  //   { id: 6, parentId: 3, text: 'Thay đổi giá bán lẻ' },
  //   { id: 7, parentId: 3, text: 'Danh sách sản phẩm' },
  //   { id: 8, parentId: 3, text: 'Đơn hàng online' },
  //   { id: 9, parentId: 3, text: 'Danh sách báo cáo Excel' },
  //   { id: 10, text: 'BÁO CÁO EXCEL', icon: 'copy' },
  // ]

  public items: DrawerItem[] = [
    { id: 0, text: 'HỒ SƠ NHÂN SỰ', icon: 'copy' },
    { id: 1, text: 'CƠ CẤU TỔ CHỨC', icon: 'copy', selected: true },
    { id: 2, parentId: 1, text: 'Cơ cấu tổ chức' },
    { id: 3, parentId: 1, text: 'Điểm làm việc' },
    { id: 4, text: 'XXXX', icon: 'copy' },
    { id: 5, text: 'XXXX', icon: 'copy' },
    { id: 6, text: 'XXXX', icon: 'copy' },
  ]

  public expandedIndices = [];
  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) <= 0;
  };
  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
    const current = ev.item.id;

    if (this.expandedIndices.indexOf(current) >= 0) {
      this.expandedIndices = this.expandedIndices.filter(
        (id) => id !== current
      );
    } else {
      this.expandedIndices.push(current);
      console.log(this.expandedIndices)
    }
  }
}
