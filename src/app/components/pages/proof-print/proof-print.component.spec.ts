import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofPrintComponent } from './proof-print.component';

describe('ProofPrintComponent', () => {
  let component: ProofPrintComponent;
  let fixture: ComponentFixture<ProofPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
