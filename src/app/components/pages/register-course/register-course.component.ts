import {Component, OnInit} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.sass']
})
export class RegisterCourseComponent implements OnInit {

  courses: __Course[];
  selected;
  cells: Cell[][];

  constructor() {
    this.selected = new Array();
    this.cells = [];
    for (let i = 0; i < 8; ++i) {
      this.cells[i] = [];
      for (let j = 0; j < 5; ++j) {
        this.cells[i][j] = new Cell(false, new __Course('', '', false, '', 1, 1));
      }
    }
  }

  ngOnInit(): void {
    this.courses = [
      new __Course('CS50', 'CPP', true, 'Dr Hamdi', 1, 1),
      new __Course('CS60', 'Java', false, 'Dr Hamdi', 4, 2),
      new __Course('CS70', 'TypeScript', false, 'Dr fawzy', 1, 3),
      new __Course('CS80', 'Android', false, 'Dr smsm', 2, 1),
      new __Course('CS90', 'Web Develop', false, 'Dr Hamdi', 2, 2)];
    (function ($) {
      $(document).ready(function () {
        $('.duallistbox').bootstrapDualListbox();
        $('.removeall').css('visibility', 'hidden');
        console.log('Hello World');
      });
    })(jQuery);
  }

  onSelect(value: __Course): void {
    this.selected.push(value);
    this.courses = this.courses.filter((element) => {
      return !(value.code === element.code);
    });
    this.cells[value.day][value.time].flag = true;
    this.cells[value.day][value.time].course = value;
  }

  onDselect(value: __Course): void {
    this.courses.push(value);
    this.selected = this.selected.filter((element) => {
      return !(value.code === element.code);
    });
    this.cells[value.day][value.time].flag = false;
    this.cells[value.day][value.time].course = new __Course('', '', false, '', 1, 1);
  }

}

class Cell {
  constructor(
    public flag: boolean,
    public course: __Course
  ) {
  }
}

class __Course {
  constructor(
    public code: string,
    public name: string,
    public isForced: boolean,
    public doctor: string,
    public day: number,
    public time: number) {
  }

}
