import { Injectable } from '@angular/core';
import { TeachingStaff } from '../../models/teaching-staff';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {API_V1} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class TeachingStaffService {

  private baseUrl = `${API_V1}/teachingStaffs`;

  constructor(private httpClient: HttpClient) { }

  findALL(
    thePage: number,
    thePageSize: number
  ): Observable<GetResponse> {
    // need to build URL based on page and size
    const params=new HttpParams()
      .set("page", `${thePage}`)
      .set("size", `${thePageSize}`);
    return this.httpClient.get<GetResponse>(this.baseUrl, {params});
  }

  save(body: TeachingStaff): any{
    return this.httpClient.post(this.baseUrl, body);
  }

  update(id: any, body: TeachingStaff): any{
    return this.httpClient.put(this.baseUrl+`/${id}`, body);
  }

  delete(id: any): any{
    return this.httpClient.delete(this.baseUrl+`/${id}`);
  }




}

interface GetResponse {
  _embedded: {
    teachingStaffs: TeachingStaff[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
