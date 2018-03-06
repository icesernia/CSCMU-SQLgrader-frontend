import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DatabasesService {
  path: string;
  URL_SERVICE: string;

  constructor(private http: HttpClient) {
    this.URL_SERVICE = environment.URL_SERVICE;
    this.path = '/databases';
   }

  getDatabasesAssignment() {
    return this.http.get(this.URL_SERVICE + this.path + '/getdatabaseassignment');
  }

  getTableList(dbName) {
    return this.http.get(this.URL_SERVICE + this.path + '/gettablelist/' + dbName);
  }

  getColList(dbName, tableName) {
    return this.http.get(this.URL_SERVICE + this.path + '/getdatatable/' + dbName + '/' + tableName);
  }
}