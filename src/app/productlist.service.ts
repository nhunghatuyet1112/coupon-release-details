import { Injectable } from '@angular/core';
import { Observable, of, skip } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataResult, DataSourceRequestState, State, toDataSourceRequest, toDataSourceRequestString } from '@progress/kendo-data-query';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  private url: string = "http://test.lapson.vn/api/product/GetListProduct";
  private url2: string = "http://test.lapson.vn/api/product/GetProduct";

  constructor(private http: HttpClient) { }

  getProducts(state: DataSourceRequestState): Observable<any> {
    let queryStr = toDataSourceRequest(state);
    return this.http.post(this.url, queryStr);
  }

  getProduct(body: any): Observable<any> {
    return this.http.post(this.url2, body);
  }
}
