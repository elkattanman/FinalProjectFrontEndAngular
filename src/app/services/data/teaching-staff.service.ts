import { Injectable } from '@angular/core';
import { TeachingStaff } from '../../models/teaching-staff';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeachingStaffService {

  private baseUrl = 'https://localhost:8443/api/teachingStaffs';
  constructor(private httpClient: HttpClient) { }

  getTeachingStaff(): Observable<TeachingStaff[]> {
    return this.httpClient.get<GetResponseTeachingStaff>(this.baseUrl).pipe(map(response => response._embedded.teachingStaffs));
  }

  getTeachingStaffListPaginate(thePage: number,
    thePageSize: number): Observable<GetResponseTeachingStaff> {
    // need to build URL based on category id, page and size 
    const searchUrl = `${this.baseUrl}/?page=${thePage}&size=${thePageSize}`;
    console.log(searchUrl);
    return this.httpClient.get<GetResponseTeachingStaff>(searchUrl);
  }

}

interface GetResponseTeachingStaff {
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
