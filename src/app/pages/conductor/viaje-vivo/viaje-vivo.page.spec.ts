import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeVivoPage } from './viaje-vivo.page';

describe('ViajeVivoPage', () => {
  let component: ViajeVivoPage;
  let fixture: ComponentFixture<ViajeVivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeVivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
