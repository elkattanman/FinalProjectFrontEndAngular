import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'https://localhost:8443/api/courses';



  constructor(private httpClient: HttpClient) { }


  getCourses(): Observable<Course[]> {
    return this.httpClient.get<GetResponseCourses>(this.baseUrl).pipe(map(response => response._embedded.courses));
  }

  getCourseListPaginate(thePage: number,
    thePageSize: number): Observable<GetResponseCourses> {
      
      
    // need to build URL based on page and size 
    const searchUrl = `${this.baseUrl}/?page=${thePage}&size=${thePageSize}`;
    // console.log(searchUrl);
    return this.httpClient.get<GetResponseCourses>(searchUrl);
  }

  
}

interface GetResponseCourses {
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


