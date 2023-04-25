import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataSourceRequestState, toDataSourceRequest } from '@progress/kendo-data-query';
import { newProduct } from './DTO/DTO3p-return.dto';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  private url: string = "http://test.lapson.vn/api/product/GetListProduct";
  private url2: string = "http://test.lapson.vn/api/product/GetProduct";
  private url3: string = "http://test.lapson.vn/api/product/UpdateProduct";

  constructor(private http: HttpClient) { }

  getProducts(state: DataSourceRequestState): Observable<any> {
    let queryStr = toDataSourceRequest(state);
    return this.http.post(this.url, queryStr);
  }

  getProduct(body: { Code: number, Barcode: string }): Observable<any> {
    return this.http.post(this.url2, body);
  }

  updateProduct(body: any): Observable<any> {
    return this.http.post(this.url3, body);
  }
}
