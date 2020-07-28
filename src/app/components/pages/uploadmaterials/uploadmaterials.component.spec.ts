import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmaterialsComponent } from './uploadmaterials.component';

describe('UploadmaterialsComponent', () => {
  let component: UploadmaterialsComponent;
  let fixture: ComponentFixture<UploadmaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadmaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadmaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
