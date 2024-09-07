import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanearViajePage } from './planear-viaje.page';

describe('PlanearViajePage', () => {
  let component: PlanearViajePage;
  let fixture: ComponentFixture<PlanearViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanearViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
