import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  endpoint;

  constructor(private http: HttpClient) { 
    this.endpoint = environment.api_url+'/wine';
  }

  getWineList(params){
    return this.http.get(this.endpoint+'/filter', { params: params });
  }
}
