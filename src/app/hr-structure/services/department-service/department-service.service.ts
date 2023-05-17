import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval } from 'rxjs';
import { DataSourceRequestState, toDataSourceRequest } from '@progress/kendo-data-query';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor(private http: HttpClient) {
    this.getToken().subscribe((response: any) => {
      this.globalToken = response.access_token;

      // Số giây sau khi gọi getToken để lấy token mới
      const refreshTokenInterval = 3600;

      // Gọi getToken sau mỗi khoảng thời gian refreshTokenInterval
      interval(refreshTokenInterval * 1000).subscribe(() => {
        this.getToken().subscribe((response: any) => {
          this.globalToken = response.access_token;
        });
      });
    });
  }
  localERP = 'http://172.16.10.86:75/erp'
  globalToken = '';
  header = new HttpHeaders()
  //GET TOKEN
  apiUrl = 'http://172.16.10.86:5001/connect/token';
  username = 'hachihachi';
  password = '123456789';
  grant_type = 'password';
  scope = 'adminapi offline_access';
  client_id = 'admin';
  client_secret = 'adminsecret';

  getToken(): Observable<any> {
    let formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);
    formData.append('grant_type', this.grant_type);
    formData.append('scope', this.scope);
    formData.append('client_id', this.client_id);
    formData.append('client_secret', this.client_secret);

    return this.http.post(this.apiUrl, formData);
  }
  //GET TOKEN

  //GET LIST DEPARTMENT TREE
  listDepartmentTreeUrl = this.localERP + '/api/hr/GetListDepartmentTree';
  getListDepartmentTree(body: any) {
    const header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.globalToken,
      'Company': '1'
    });
    return this.http.post(this.listDepartmentTreeUrl, body, { headers: header });
  }
  //GET LIST DEPARTMENT TREE

  //GET LIST DEPARTMENT
  listDepartmentUrl = this.localERP + '/api/hr/GetListDepartment';
  getListDepartment(body: any) {
    const header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.globalToken,
      'Company': '1'
    });
    return this.http.post(this.listDepartmentUrl, body, { headers: header });
  }
  //GET LIST DEPARTMENT

  //GET LIST LOCATION
  listLocationUrl = this.localERP + '/api/hr/GetListLocation';
  getListLocation(body: any) {
    const header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.globalToken,
      'Company': '1'
    });
    return this.http.post(this.listLocationUrl, body, { headers: header });
  }
  //GET LIST LOCATION

  //GET LIST POSITION
  listPositionUrl = this.localERP + '/api/hr/GetListPosition';
  getListPosition(body: { DepartmentID: number }) {
    const header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.globalToken,
      'Company': '1'
    });
    return this.http.post(this.listPositionUrl, body, { headers: header });
  }
  //GET LIST POSITION

  //GET LIST POSITION GROUP
  listPositionGroupUrl = this.localERP + '/api/hr/GetListPositionGroup';
  getListPositionGroup(body: {} = {}) {
    const header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.globalToken,
      'Company': '1'
    });
    return this.http.post(this.listPositionGroupUrl, body, { headers: header });
  }
  //GET LIST POSITION GROUP

  //GET LIST POSITION ROLE
  listPositionRoleUrl = this.localERP + '/api/hr/GetListPositionGroup';
  getListPositionRole(body: {} = {}) {
    const header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.globalToken,
      'Company': '1'
    });
    return this.http.post(this.listPositionRoleUrl, body, { headers: header });
  }
  //GET LIST POSITION ROLE

}
