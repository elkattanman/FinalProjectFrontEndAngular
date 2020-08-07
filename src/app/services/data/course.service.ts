import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { map } from 'rxjs/operators';
import {API_V1} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = `${API_V1}/courses`;



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




}

interface GetResponse {
  _embedded: {
    courses: Course[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}


