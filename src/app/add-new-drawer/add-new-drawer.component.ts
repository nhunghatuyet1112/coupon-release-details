import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-new-drawer',
  templateUrl: './add-new-drawer.component.html',
  styleUrls: ['./add-new-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddNewDrawerComponent {
  //VARIABLES RECEIVE VALUE FROM APP-MAIN-CONTENT

  @Input() buttonName = '';

  //TEXTBOX
  @Input() productName = '';
  @Input() Barcode = '';
  @Input() FreeShippingImage = '';
  @Input() isBarcode = false;
  //TEXTBOX

  //CHECKBOX
  @Input() isBestPrice = false;
  @Input() isPromotion = false;
  //CHECKBOX

  //IMAGE
  @Input() ImageUrl = "";
  @Input() isImageUrl = false;
  //IMAGE

  //PRODUCT LINK
  @Input() Alias = '';
  //PRODUCT LINK

  //DROPDOWN STATUS ID LIST
  @Input() statusID: Array<{ text: string, value: number }> = [];
  @Input() defaultStatus = 0;
  // @Input() defaultStatus: number;
  //DROPDOWN STATUS ID LIST

  //PRICE TEXTBOXES VALUE
  @Input() Price = 0;
  @Input() PriceBase = 5;
  @Input() PriceVIP = 0;
  //PRICE TEXTBOXES VALUE


  //VARIABLES RECEIVE VALUE FROM APP-MAIN-CONTENT

  //FUNCTIONS PASS TO APP-MAIN-CONTENT
  @Output() closeDrawer = new EventEmitter();
  @Output() submitProduct = new EventEmitter();

  //FIND PRODUCT BY BARCODE
  @Output() changeBarcode = new EventEmitter<string>();
  @Output() blurBarcode = new EventEmitter();
  //FIND PRODUCT BY BARCODE


  //CHANGE PRODUCT PRICE & PRICE BASE
  @Output() changePrice = new EventEmitter();
  @Output() changePriceBase = new EventEmitter();
  //CHANGE PRODUCT PRICE
  @Output() changeStatusID = new EventEmitter();

  //CHECK BEST PRICE & PROMOTION
  @Output() checkBestPrice = new EventEmitter();
  @Output() checkPromotion = new EventEmitter();
  //CHECK BEST PRICE & PROMOTION

  onCloseDrawer(event: any) {
    this.closeDrawer.emit(event);
  }

  onSubmitProduct(event: any) {
    this.submitProduct.emit(event);
  }

  onBlurBarcode(event: any) {
    this.blurBarcode.emit(event);
  }

  onChangeBarcode(value: string) {
    this.changeBarcode.emit(value);
  }

  onChangePrice(event: any) {
    this.changePrice.emit(event);
  }

  onChangePriceBase(event: any) {
    this.changePriceBase.emit(event);
  }

  onChangeStatusID(event: any) {
    this.changeStatusID.emit(event);
  }

  onCheckBestPrice(event: any) {
    this.checkBestPrice.emit(event)
  }

  onCheckPromotion(event: any) {
    this.checkPromotion.emit(event);
  }

  //FUNCTIONS PASS TO APP-MAIN-CONTENT
}
