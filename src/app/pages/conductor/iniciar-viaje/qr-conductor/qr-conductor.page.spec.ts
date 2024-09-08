import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrConductorPage } from './qr-conductor.page';

describe('QrConductorPage', () => {
  let component: QrConductorPage;
  let fixture: ComponentFixture<QrConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
