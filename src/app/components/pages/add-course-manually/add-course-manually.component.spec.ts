import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseManuallyComponent } from './add-course-manually.component';

describe('AddCourseManuallyComponent', () => {
  let component: AddCourseManuallyComponent;
  let fixture: ComponentFixture<AddCourseManuallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseManuallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
