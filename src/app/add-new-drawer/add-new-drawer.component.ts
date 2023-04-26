import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-drawer',
  templateUrl: './add-new-drawer.component.html',
  styleUrls: ['./add-new-drawer.component.scss']
})
export class AddNewDrawerComponent {
  //VARIABLES RECEIVE VALUE FROM APP-MAIN-CONTENT

  @Input() buttonName = '';

  //TEXTBOX
  @Input() productName = '';
  @Input() Barcode = '';
  @Input() isBarcode = false;
  //TEXTBOX

  //IMAGE
  @Input() ImageUrl = "";
  @Input() isImageUrl = false;
  //IMAGE

  //PRODUCT LINK
  @Input() Alias = '';
  //PRODUCT LINK

  //DROPDOWN STATUS ID LIST
  @Input() statusID: Array<{ text: string, value: number }> = [];
  // @Input() defaultStatus: number;
  //DROPDOWN STATUS ID LIST

  //PRICE TEXTBOXES VALUE
  @Input() Price = 0;
  @Input() PriceBase = 0;
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


  //CHANGE PRODUCT PRICE
  @Output() changePrice = new EventEmitter();
  @Output() changePriceBase = new EventEmitter();
  //CHANGE PRODUCT PRICE
  @Output() changeStatusID = new EventEmitter();

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

  //FUNCTIONS PASS TO APP-MAIN-CONTENT
}
