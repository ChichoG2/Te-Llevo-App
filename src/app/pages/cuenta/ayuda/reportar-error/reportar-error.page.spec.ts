import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportarErrorPage } from './reportar-error.page';

describe('ReportarErrorPage', () => {
  let component: ReportarErrorPage;
  let fixture: ComponentFixture<ReportarErrorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
