import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-drawer',
  templateUrl: './add-new-drawer.component.html',
  styleUrls: ['./add-new-drawer.component.scss']
})
export class AddNewDrawerComponent {
  //VARIABLES RECEIVE VALUE FROM APP-MAIN-CONTENT

  //TEXTBOX
  @Input() productName = '';
  @Input() Barcode = '';
  //TEXTBOX

  //IMAGE
  @Input() ImageUrl = "/Uploads/_11/product1/4909411076870.jpg";
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

  onChangeStatusID(event: any) {
    this.changeStatusID.emit(event);
  }
  //FUNCTIONS PASS TO APP-MAIN-CONTENT
}
