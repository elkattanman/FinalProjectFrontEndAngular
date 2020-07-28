import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterailEditComponent } from './materail-edit.component';

describe('MaterailEditComponent', () => {
  let component: MaterailEditComponent;
  let fixture: ComponentFixture<MaterailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
