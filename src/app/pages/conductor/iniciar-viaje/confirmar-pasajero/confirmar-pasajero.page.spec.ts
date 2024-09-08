import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarPasajeroPage } from './confirmar-pasajero.page';

describe('ConfirmarPasajeroPage', () => {
  let component: ConfirmarPasajeroPage;
  let fixture: ComponentFixture<ConfirmarPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
