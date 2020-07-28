import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ThrowStmt } from '@angular/compiler';

declare var jQuery: any;

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.sass']
})
export class RegisterCourseComponent implements OnInit {

  courses: Course[];
  selected;
  cells: Cell[][];
  constructor(
    public gl: GlobalService
    ) {
      this.selected = new Array();
      this.cells = [];
      for (let i = 0 ; i < 8 ; ++i){
        this.cells[i] = [];
        for (let j = 0; j < 5 ; ++j){
          this.cells[i][j] = new Cell(false, new Course('', '', false, '', 1, 1));
        }
      }
     }

  ngOnInit(): void {
    this.courses = [
      new Course('CS50', 'CPP', true, 'Dr Hamdi', 1, 1),
      new Course('CS60', 'Java', false, 'Dr Hamdi', 4, 2),
      new Course('CS70', 'TypeScript', false, 'Dr fawzy', 1, 3),
      new Course('CS80', 'Android', false, 'Dr smsm', 2, 1),
      new Course('CS90', 'Web Develop', false, 'Dr Hamdi', 2, 2)
  ];
    this.gl.page = 'RegisterCourse';
    (function($) {
      $(document).ready(function(){
        $('.duallistbox').bootstrapDualListbox();
        $('.removeall').css('visibility', 'hidden');
        console.log('Hello World');
      });
    })(jQuery);
  }

  onSelect(value: Course){
    this.selected.push(value);
    this.courses = this.courses.filter((element) => {
          return !(value.code === element.code);
    });
    this.cells[value.day][value.time].flag = true;
    this.cells[value.day][value.time].course = value;
  }

  onDselect(value: Course){
    this.courses.push(value);
    this.selected = this.selected.filter((element) => {
      return !(value.code === element.code);
    });
    this.cells[value.day][value.time].flag = false;
    this.cells[value.day][value.time].course = new Course('', '', false, '', 1, 1);
  }

}

class Cell{
  constructor(
    public flag: boolean,
    public course: Course
  ){}
}
class Course{
  constructor(public code: string,
              public name: string,
              public isForced: boolean,
              public doctor: string,
              public day: number,
              public time: number
  ){}
}
