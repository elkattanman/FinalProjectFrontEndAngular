import { Component, OnInit } from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.sass']
})
export class AddTermComponent implements OnInit {

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 125);

    this.fromDateRegister = calendar.getToday();
    this.toDateRegister = calendar.getNext(calendar.getToday(), 'd', 14);

    this.fromDateUpdate = calendar.getToday();
    this.toDateUpdate = calendar.getNext(calendar.getToday(), 'd', 7);

    this.fromDateDelete = calendar.getToday();
    this.toDateDelete = calendar.getNext(calendar.getToday(), 'd', 7);

  }

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  hoveredDateRegister: NgbDate | null = null;
  fromDateRegister: NgbDate;
  toDateRegister: NgbDate | null = null;

  hoveredDateUpdate: NgbDate | null = null;
  fromDateUpdate: NgbDate;
  toDateUpdate: NgbDate | null = null;

  hoveredDateDelete: NgbDate | null = null;
  fromDateDelete: NgbDate;
  toDateDelete: NgbDate | null = null;

  ngOnInit(): void {
  }




  onDateSelection(date: NgbDate): void {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  onDateSelection1(date: NgbDate): void {
    if (!this.fromDateRegister && !this.toDateRegister) {
      this.fromDateRegister = date;
    } else if (this.fromDateRegister && !this.toDateRegister && date.after(this.fromDateRegister)) {
      this.toDateRegister = date;
    } else {
      this.toDateRegister = null;
      this.fromDateRegister = date;
    }
  }

  onDateSelection2(date: NgbDate): void {
    if (!this.fromDateUpdate && !this.toDateUpdate) {
      this.fromDateUpdate = date;
    } else if (this.fromDateUpdate && !this.toDateUpdate && date.after(this.fromDateUpdate)) {
      this.toDateUpdate = date;
    } else {
      this.toDateUpdate = null;
      this.fromDateUpdate = date;
    }
  }

  onDateSelection3(date: NgbDate): void {
    if (!this.fromDateDelete && !this.toDateDelete) {
      this.fromDateDelete = date;
    } else if (this.fromDateDelete && !this.toDateDelete && date.after(this.fromDateDelete)) {
      this.toDateDelete = date;
    } else {
      this.toDateDelete = null;
      this.fromDateDelete = date;
    }
  }

  isHovered(date: NgbDate): boolean {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isHovered1(date: NgbDate): boolean {
    return this.fromDateRegister && !this.toDateRegister && this.hoveredDateRegister && date.after(this.fromDateRegister) && date.before(this.hoveredDateRegister);
  }

  isHovered2(date: NgbDate): boolean{
    return this.fromDateUpdate && !this.toDateUpdate && this.hoveredDateUpdate && date.after(this.fromDateUpdate) && date.before(this.hoveredDateUpdate);
  }

  isHovered3(date: NgbDate): boolean {
    return this.fromDateDelete && !this.toDateDelete && this.hoveredDateDelete && date.after(this.fromDateDelete) && date.before(this.hoveredDateDelete);
  }


  isInside(date: NgbDate): boolean {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isInside1(date: NgbDate): boolean {
    return this.toDateRegister && date.after(this.fromDateRegister) && date.before(this.toDateRegister);
  }

  isInside2(date: NgbDate): boolean {
    return this.toDateUpdate && date.after(this.fromDateUpdate) && date.before(this.toDateUpdate);
  }

  isInside3(date: NgbDate): boolean {
    return this.toDateDelete && date.after(this.fromDateDelete) && date.before(this.toDateDelete);
  }

  isRange(date: NgbDate): boolean {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date)
    || this.isHovered(date);
  }

  isRange1(date: NgbDate): boolean {
    return date.equals(this.fromDateRegister) || (this.toDateRegister && date.equals(this.toDateRegister))
    || this.isInside1(date) || this.isHovered1(date);
  }

  isRange2(date: NgbDate): boolean {
    return date.equals(this.fromDateUpdate) || (this.toDateUpdate && date.equals(this.toDateUpdate))
    || this.isInside2(date) || this.isHovered2(date);
  }

  isRange3(date: NgbDate): boolean {
    return date.equals(this.fromDateDelete) || (this.toDateDelete && date.equals(this.toDateDelete))
    || this.isInside3(date) || this.isHovered3(date);
  }
}
