import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Term} from "../../models/term";
import {API_V1} from "../../constants";
@Injectable({
  providedIn: 'root'
})
export class TermService {

  private baseUrl = `${API_V1}/api/terms`;

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

  save(body: Term): any{
    return this.httpClient.post(this.baseUrl, body);
  }

  update(id: any, body: Term): any{
    return this.httpClient.put(this.baseUrl+`/${id}`, body);
  }

  delete(id: any): any{
    return this.httpClient.delete(this.baseUrl+`/${id}`);
  }



}

interface GetResponse{
  _embedded: {
    terms: Term[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
