import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientgraphComponent } from './patientgraph.component';

describe('PatientgraphComponent', () => {
  let component: PatientgraphComponent;
  let fixture: ComponentFixture<PatientgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientgraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
