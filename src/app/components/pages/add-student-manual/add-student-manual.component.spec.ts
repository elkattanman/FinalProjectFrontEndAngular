import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentManualComponent } from './add-student-manual.component';

describe('AddStudentManualComponent', () => {
  let component: AddStudentManualComponent;
  let fixture: ComponentFixture<AddStudentManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
