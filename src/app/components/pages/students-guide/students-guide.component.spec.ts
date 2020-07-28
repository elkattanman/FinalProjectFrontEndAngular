import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsGuideComponent } from './students-guide.component';

describe('StudentsGuideComponent', () => {
  let component: StudentsGuideComponent;
  let fixture: ComponentFixture<StudentsGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
