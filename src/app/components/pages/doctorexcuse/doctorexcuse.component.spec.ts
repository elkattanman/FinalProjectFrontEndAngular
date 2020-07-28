import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorexcuseComponent } from './doctorexcuse.component';

describe('DoctorexcuseComponent', () => {
  let component: DoctorexcuseComponent;
  let fixture: ComponentFixture<DoctorexcuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorexcuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorexcuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
