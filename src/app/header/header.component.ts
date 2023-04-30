import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuContent: string[] = ['CẤU HÌNH', 'MUA HÀNG', 'KHO HÀNG', 'ĐIỀU PHỐI', 'MARKETING', 'E-COMMERCE', 'KINH DOANH', 'NHÂN SỰ', 'BÁO CÁO']

  ngOnInit(): void {
    $('document').ready(() => {
      $('.k-breadcrumb-container li:first-child').addClass('li-policy');
      $('.li-policy div').css({ 'color': '#1A6634', 'margin-left': '2px' })
    })
  }
}
