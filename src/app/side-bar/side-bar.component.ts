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
  public selected = 'KHUYẾN MÃI';
  public expandMode: DrawerMode = 'overlay';

  public items: DrawerItem[] = [
    { id: 0, text: 'KHUYẾN MÃI', icon: 'copy' },
    { id: 1, text: 'NỘI DUNG WEBSITE', icon: 'copy' },
    { id: 2, text: 'QUẢN LÝ BANNER', icon: 'copy' },
    { id: 3, text: 'CHÍNH SÁCH', icon: 'copy' },
    { id: 4, parentId: 3, text: 'Coupon' },
    { id: 5, parentId: 3, text: 'Phân nhóm PMH/Coupon' },
    { id: 6, parentId: 3, text: 'Thay đổi giá bán lẻ' },
    { id: 7, parentId: 3, text: 'Danh sách sản phẩm' },
    { id: 8, parentId: 3, text: 'Đơn hàng online' },
    { id: 9, parentId: 3, text: 'Danh sách báo cáo Excel' },
    { id: 10, text: 'BÁO CÁO EXCEL', icon: 'copy' },
  ]

  public expandedIndices = [0];
  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0;
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
    }
  }
}
