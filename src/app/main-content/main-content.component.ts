import { Component, ViewEncapsulation } from '@angular/core';
import { IntlService } from "@progress/kendo-angular-intl";
import { PRODUCT } from '../DTO/DTO3p-return.dto';
import { ProductlistService } from '../productlist.service';
import { PopupSettings } from '@progress/kendo-angular-dateinputs';
import { State } from '@progress/kendo-data-query';
import * as $ from 'jquery'
import { newProduct } from '../DTO/DTO3p-return.dto';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainContentComponent {
  constructor(public intl: IntlService, private productList: ProductlistService) {

  }
  ////////============================VARIABLES============================\\\\\\\\
  //============================FILTER============================\\
  public filterValue: string = '4';
  private initialFilterState: State = {
    skip: 1,
    take: 50,
    filter: {
      logic: 'or',
      filters: [
        { field: 'Barcode', operator: 'contains', value: '4', ignoreCase: true }
      ]
    },
    sort: [{ field: 'Code', dir: 'desc' }]
  }
  //============================FILTER============================\\



  //============================PRODUCT LIST & DETAILS============================\\
  public productListReturn = new PRODUCT(0, null, []);
  public productDetail = new PRODUCT(0, null, {});

  public productBarcode = '';
  public newProductDetail = new newProduct({}, ["Price"]);
  public productData = [...this.productListReturn.ObjectReturn];


  //============================PRODUCT LIST & DETAILS============================\\



  //============================ADD & EDIT DRAWER============================\\
  public addDrawerExpanded = false;
  public editDrawerExpanded = false;
  ///////////////////////////PASS TO APP-NEW-DRAWER\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  //DROPDOWN STATUS ID LIST
  public statusID: Array<{ text: string, value: number }> = [
    { text: 'Tạo Mới', value: 0 },
    { text: 'Chờ Duyệt', value: 1 },
    { text: 'Duyệt', value: 2 },
    { text: 'Ngưng Áp Dụng', value: 3 },
    { text: 'Trả Về', value: 4 },
  ];
  //DROPDOWN STATUS ID LIST

  ///////////////////////////PASS TO APP-NEW-DRAWER\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //============================ADD & EDIT DRAWER============================\\


  //============================EDIT & DELETE DIALOG============================\\
  public isEditDialogOpened = false;
  public isDeleteDialogOpened = false;
  //============================EDIT & DELETE DIALOG============================\\


  //============================LANGUAGE============================\\
  public isLanguage: string = 'vi';
  //============================LANGUAGE============================\\


  //============================DATERANGE============================\\
  public today: Date = new Date();
  public range = { start: new Date(this.today), end: new Date() };
  public min: Date = new Date(2021, 9, 26);
  public max: Date = new Date(2100, 9, 26);
  public popupSettings2: PopupSettings = {
    appendTo: "component",
    animate: false,
    popupClass: "date-container",
  };
  //============================DATERANGE============================\\

  //============================STORE UNITS============================\\
  public masterSelected = false;
  public selectedList = [
    { id: 'pasteur', value: 'CH Hachi Hachi Pasteur', isSelected: false },
    { id: 'nvt', value: 'CH Hachi Hachi NVT', isSelected: false },
    { id: 'cmt8', value: 'CH Hachi Hachi CMT8', isSelected: false },
    { id: 'pmh', value: 'CH Hachi Hachi PMH', isSelected: false },];
  //============================STORE UNITS============================\\


  //============================COUPON CLASSIFICATION RADIO BUTTON STATE============================\\
  public radioSelected1 = false;
  public radioSelected2 = false;
  public isDisabled = false;
  //============================COUPON CLASSIFICATION RADIO BUTTON STATE============================\\


  //============================NOTIFICATION TYPE============================\\
  public isNoti: string = 'SMS';
  //============================NOTIFICATION TYPE============================\\


  //============================DATETIME PICKER============================\\
  public valueDate: Date = new Date();
  public defaultTime: { text: string; value: { hour: number, minutes: number } } = {
    text: "hh:mm",
    value: { hour: 1, minutes: 0 },
  }
  public timeItems: Array<{ text: string, value: { hour: number, minutes: number } }> = [
    { text: '1 : 00', value: { hour: 1, minutes: 0 } },
    { text: '1 : 30', value: { hour: 1, minutes: 30 } },
    { text: '2 : 00', value: { hour: 2, minutes: 0 } },
    { text: '2 : 30', value: { hour: 2, minutes: 30 } },
    { text: '3 : 00', value: { hour: 3, minutes: 0 } },
    { text: '3 : 30', value: { hour: 3, minutes: 30 } },
    { text: '4 : 00', value: { hour: 4, minutes: 0 } },
    { text: '4 : 30', value: { hour: 4, minutes: 30 } },
    { text: '5 : 00', value: { hour: 5, minutes: 0 } },
    { text: '5 : 30', value: { hour: 5, minutes: 30 } },
    { text: '6 : 00', value: { hour: 6, minutes: 0 } },
    { text: '6 : 00', value: { hour: 6, minutes: 30 } },
    { text: '7 : 00', value: { hour: 7, minutes: 0 } },
    { text: '7 : 00', value: { hour: 7, minutes: 30 } },
    { text: '8 : 00', value: { hour: 8, minutes: 0 } },
    { text: '8 : 00', value: { hour: 8, minutes: 30 } },
    { text: '9 : 00', value: { hour: 9, minutes: 0 } },
    { text: '9 : 00', value: { hour: 9, minutes: 30 } },
    { text: '10 : 00', value: { hour: 10, minutes: 0 } },
    { text: '10 : 00', value: { hour: 10, minutes: 30 } },
    { text: '11 : 00', value: { hour: 11, minutes: 0 } },
    { text: '11 : 00', value: { hour: 11, minutes: 30 } },
    { text: '12 : 00', value: { hour: 12, minutes: 0 } },
    { text: '12 : 30', value: { hour: 12, minutes: 30 } },
  ]
  public valueTime!: { hour: number, minutes: number };
  public valueDateTime = new Date();
  public showDateTimePicker = false;
  public isTimePickerDisabled = false;
  //============================DATETIME PICKER============================\\

  //============================GRID PAGER============================\\
  public buttonCount = 2;
  public sizes = [35, 50];
  //============================GRID PAGER============================\\


  ////////============================VARIABLES============================\\\\\\\\


  ////////============================FUCTIONS============================\\\\\\\\

  //============================GET PRODUCT LIST============================\\
  getProducts() {
    this.productList.getProducts(this.initialFilterState).subscribe(products => {
      this.productData = products.ObjectReturn.Data;
      this.productListReturn.ObjectReturn = products.ObjectReturn.Data;
      console.log(this.productListReturn.ObjectReturn);
    })
  }
  //============================GET PRODUCT LIST============================\\


  //============================HANDLE FILTER INPUT============================\\
  public onChangeFilter(value: any) {
    this.filterValue = value;
  }

  public handleFilter(value: string) {
    let filterState: State = {
      skip: 1,
      take: 50,
      filter: {
        logic: 'or',
        filters: [
          { field: 'Barcode', operator: 'contains', value: value, ignoreCase: true },
          { field: 'ProductName', operator: 'contains', value: value, ignoreCase: true },
          { field: 'Poscode', operator: 'contains', value: value, ignoreCase: true }
        ]
      },
      sort: [{ field: 'Code', dir: 'desc' }]
    }
    this.productList.getProducts(filterState).subscribe(products => {
      this.productData = products.ObjectReturn.Data;
    })
  }
  //============================HANDLE FILTER INPUT============================\\


  //============================CHANGE LANGUAGE============================\\
  onJapanLanguage(): string {
    return this.isLanguage = 'ja';
  }
  onEnglishLanguage(): string {
    return this.isLanguage = 'en';
  }
  onVietnamese(): string {
    return this.isLanguage = 'vi';
  }
  //============================CHANGE LANGUAGE============================\\

  //============================DATERANGE============================\\
  disabledDates = (date: Date): boolean => {
    return date.getMonth() < this.today.getMonth();
  }
  //============================DATERANGE============================\\

  //============================DATETIME PICKER============================\\
  public onDisabledTimePicker(): void {
    this.isTimePickerDisabled = !this.isTimePickerDisabled;
    this.valueDateTime = new Date(this.valueDate.getFullYear(),
      this.valueDate.getMonth(), this.valueDate.getDate(), 0, 0);
  }


  public onChangeDate(value: Date): void {
    this.valueDate = value;
    this.valueDateTime = new Date(this.valueDate.getFullYear(),
      this.valueDate.getMonth(), this.valueDate.getDate(), this.valueTime.hour, this.valueTime.minutes);
  }

  public onChangeTime(time: any): void {
    this.valueTime = time.value;
    this.valueDateTime = new Date(this.valueDate.getFullYear(),
      this.valueDate.getMonth(), this.valueDate.getDate(), this.valueTime.hour, this.valueTime.minutes);
  }

  public onMorning(): void {
    this.valueDateTime = new Date(this.valueDate.getFullYear(),
      this.valueDate.getMonth(), this.valueDate.getDate(), this.valueTime.hour, this.valueTime.minutes);
  }

  public onEvening(): void {
    this.valueDateTime = new Date(this.valueDate.getFullYear(),
      this.valueDate.getMonth(), this.valueDate.getDate(), this.valueTime.hour + 12, this.valueTime.minutes);
  }
  //============================DATETIME PICKER============================\\


  //============================CHECK STORE UNIT============================\\
  checkUncheckAll(): void {
    for (var i = 0; i < this.selectedList.length; i++) {
      this.selectedList[i].isSelected = this.masterSelected;
    }
  }
  isAllSelected() {
    this.masterSelected = this.selectedList.every(function (item: any) {
      return item.isSelected == true;
    })
  }
  //============================CHECK STORE UNIT============================\\

  //============================CLASSIFIED COUPON============================\\
  handlePublicCoupon(): any {
    if (this.radioSelected1 = true) {
      this.isDisabled = true;
    }
  }
  handlePersonalCoupon(): any {
    if (this.radioSelected2 = true) {
      this.isDisabled = false;
    }
  }
  //============================CLASSIFIED COUPON============================\\

  //============================HANDLE NOTIFICATION TYPE============================\\
  onSMS(): string {
    return this.isNoti = 'SMS';
  }

  onMobileApp(): string {
    return this.isNoti = 'Mobile App';
  }

  onCart(): string {
    return this.isNoti = 'Cart';
  }
  //============================HANDLE NOTIFICATION TYPE============================\\

  //============================HANDLE EDIT PRODUCT============================\\
  onChangeBarcode(event: any) {
    this.productBarcode = event;
  }

  onBlurBarcode() {
    this.productList.getProduct({ Code: 0, Barcode: this.productBarcode }).subscribe(product => {
      this.newProductDetail.DTO = product.ObjectReturn;
    })
  }

  onChangeNewProductPrice(price: any) {
    this.newProductDetail.DTO.Price = Number(price);
  }

  onChangeStatusID(event: any) {
    console.log(event);
  }
  ////////////////////////////////////DRAWER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  onOpenAddProductDrawer(drawer: any) {
    this.newProductDetail.DTO = {};
    this.newProductDetail.DTO.ImageThumb = "/Uploads/_11/product1/4909411076870.jpg"
    drawer.toggle();
  }

  onCloseAddProductDrawer(event: any) {
    event.toggle()
  }

  onSubmitNewProduct(drawer: any) {
    this.productList.updateProduct(this.newProductDetail).subscribe(r => console.log(r))
    drawer.toggle();
  }

  onOpenEditProductDrawer(drawer: any, code: number, barcode: string) {
    drawer.toggle();
    this.productList.getProduct({ Code: code, Barcode: barcode }).subscribe(product => {
      this.productDetail.ObjectReturn = product.ObjectReturn;
    })
  }

  onEditProductPrice(price: any) {
    this.productDetail.ObjectReturn.Price = Number(price);
  }

  onCloseEditProductDrawer(event: any) {
    event.toggle()
  }

  onSubmitEditProductDrawer(drawer: any) {
    this.productList.updateProduct({ DTO: this.productDetail.ObjectReturn, Properties: ["Price"] }).subscribe(r => console.log(r));
    drawer.toggle();
  }
  ////////////////////////////////////DRAWER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  ////////////////////////////////////DIALOG\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  onOpenEditProductDialog(code: number, barcode: string) {
    this.isEditDialogOpened = !this.isEditDialogOpened;
    this.productList.getProduct({ Code: code, Barcode: barcode }).subscribe(product => {
      this.productDetail.ObjectReturn = product.ObjectReturn;
    })
  }

  onCloseDialog() {
    this.isEditDialogOpened = false;
    this.isDeleteDialogOpened = false;
  }

  onSubmitEditProductDialog(name: string, barcode: string) {
    this.productData.map(p => {
      if (p.Code === this.productDetail.ObjectReturn.Code) {
        p.ProductName = name;
        p.Barcode = barcode;
      }
    })
    this.isEditDialogOpened = false;
  }
  ////////////////////////////////////DIALOG\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //============================HANDLE EDIT PRODUCT============================\\


  //============================HANDLE DELETE PRODUCT DIALOG============================\\
  onOpenDeleteDialog(value: number, name: string) {
    this.isDeleteDialogOpened = true;
    this.productDetail.ObjectReturn.Code = value;
    this.productDetail.ObjectReturn.ProductName = name;
  }

  onDeleteProduct() {
    let productIndex = this.productData.findIndex(p => p.Code === this.productDetail.ObjectReturn.Code);
    let arr = this.productData;
    arr.splice(productIndex, 1);
    this.isDeleteDialogOpened = false;
    this.productData = [...arr];
  }
  //============================HANDLE DELETE PRODUCT DIALOG============================\\
  ngOnInit(): void {
    this.getProducts();
    $(document).ready(() => {
      $('.k-input-button').click(() => {
        $('button').remove(".k-calendar-nav-today");
      })

      document.getElementById('usages')?.setAttribute('dir', 'rtl');
      document.getElementById('limit')?.setAttribute('dir', 'rtl');
      document.getElementById('minimum')?.setAttribute('dir', 'rtl');

      //Grid Pager
      $('.page-sizes kendo-label').text('Hiển thị mỗi trang');
      $('.page-sizes .k-dropdown .k-input-inner').css({ 'font-weight': '400', 'font-size': '13px', 'line-height': '16px', 'color': '#26282E' })
      $('.page-sizes .k-dropdown').css({ 'border-style': 'none', 'background-color': '#EDEFF3' });
      $('.k-pager-first').text('Đầu');
      $('.k-pager-first').css({ 'color': '#959DB3' });
      $('kendo-dropdownlist').removeClass("k-picker-solid");
      $(".prev-btn .k-pager-first").addClass('k-pager-first-text');
      $(".k-pager-first-text").removeClass('k-pager-nav');
      $(".prev-btn .k-pager-first-text").attr("style", "background-color:#F4F5F7!important");
      $(".prev-btn .k-pager-first-text").css({ 'border-radius': '5px' })
      $(".prev-btn .k-pager-nav").empty();
      var prevBtn = '<i class="fa-solid fa-chevron-left"></i>';
      $(".prev-btn .k-pager-nav").append(prevBtn);
      $(".prev-btn .k-pager-nav").attr("style", "background-color:#F4F5F7!important");
      $(".prev-btn .k-pager-nav").css({ 'height': '29px', 'width': '20px', 'margin': '0px 10px 0px 10px', 'border-radius': '3px' })
      $(".prev-btn .k-pager-nav i").attr("style", "background-color:#F4F5F7!important");
      $('.k-dropdown').click(() => {
        $('.k-list-md .k-list-content .k-list-ul .k-selected').css('background-color', '#008000');
      })
      $('.k-pager-numbers .k-selected').attr("style", "background-color:#959DB3!important");
      $('.k-pager-numbers .k-selected').css({ 'color': '#FFFFFF', 'border-radius': '5px', 'padding': '0', 'min-width': 'calc(1.4285714286em + 1px)' });
      $('.k-pager-last').text('Cuối');
      $(".k-pager-last").attr("style", "background-color:#FFFFFF!important");
      $('.k-pager-last').css({ 'color': '#959DB3', 'font-weight': '400', 'border-radius': '5px' });
      $('.next-btn :first-child').empty();
      var nextBtn = '<i class="fa-solid fa-chevron-right"></i>';
      $('.next-btn :first-child').append(nextBtn);
      $(".next-btn :first-child").attr("style", "background-color:#FFFFFF!important");
      $(".next-btn :first-child").css({ 'height': '29px', 'width': '20px', 'margin': '0px 10px 0px 5px', 'border-radius': '3px' })
      $(".next-btn :first-child i").attr("style", "background-color:#FFFFFF!important");
      $(".next-btn :first-child i").css('color', '#959DB3');

    })
  }
  ////////============================FUCTIONS============================\\\\\\\\
}
