import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Course} from '../../../models/course';
import {CourseService} from '../../../services/data/course.service';
import {TeachingStaffService} from '../../../services/data/teaching-staff.service';
import {TeachingStaff} from 'src/app/models/teaching-staff';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {CourseInTerm} from 'src/app/models/course-in-term';
import {Term} from "../../../models/term";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Labs} from "../../../models/labs";
import {Gender} from "../../../models/gender.enum";
import {TermService} from "../../../services/data/term.service";

@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.sass']
})
export class AddTermComponent implements OnInit {

  courses: Course[];
  teachingStaffs: TeachingStaff[];

  term: Term;
  courseinTerm: CourseInTerm;
  lab : Labs;



  formatter = (d: TeachingStaff) => `${d.nameEnglish}|${d.nameArabic}`;

  search = (text$: Observable<string>) => text$.pipe(

    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.teachingStaffs.filter(teachingStaff => new RegExp(term, 'mi').test(teachingStaff.nameArabic)).slice(0, 10))
  )

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  constructor(
    private router: Router,
    private courseService: CourseService,
    private teachingStaffService: TeachingStaffService,
    private modalService: NgbModal,
    private termService:TermService
  ) {
      this.term=new Term();
      this.term.courseInTermList=new Array();
      this.courseinTerm=new CourseInTerm();
      this.courseinTerm.labs=new Array();
      this.lab=new Labs();
  }

  ngOnInit() {

    this.listCourses();
    this.listTeachingStaffs();

  }

  listCourses(): void{
    this.courseService.findALL(this.thePageNumber - 1,
      this.thePageSize)
      .subscribe(this.processCourseResult());
  }

  listTeachingStaffs(): void{
    this.teachingStaffService.findALL(0 , 500)
      .subscribe(data =>{
        this.teachingStaffs= data._embedded.teachingStaffs;
      });
  }

  doSearch(value: string) {
    console.log(`value=${value}`);
    this.listCourses();
  }

  processCourseResult() {
    return data => {
      this.courses = data._embedded.courses;
      // console.log(this.courses);
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };


  }

  processTeachingStaffResult() {
    return data => {
      this.courses = data._embedded.courses;
      // console.log(this.courses);
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listCourses();
  }

  openModel(content:any, course : Course) {
    this.modalService.open(content, { size: 'xl' });
    this.courseinTerm.course=course;
    this.courseinTerm.labs=new Array();
  }


  saveCourseInTerm(): void{
    this.term.courseInTermList.push(this.courseinTerm);
    this.courseinTerm=new CourseInTerm();
    console.log(this.courseinTerm)
  }

  addSection(): void{
    this.courseinTerm.labs.push(this.lab);
    this.lab=new Labs();
  }

  onSubmit(): void{
    console.log(JSON.stringify(this.term));
    this.termService.save(this.term).subscribe(
      data=>{
        console.log(data);
        alert("DONE");
      },error=>{
        console.log(error.message);
      }
    );
  }


}
