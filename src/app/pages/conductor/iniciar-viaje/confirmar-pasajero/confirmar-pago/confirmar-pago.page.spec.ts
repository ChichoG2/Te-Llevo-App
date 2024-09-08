import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarPagoPage } from './confirmar-pago.page';

describe('ConfirmarPagoPage', () => {
  let component: ConfirmarPagoPage;
  let fixture: ComponentFixture<ConfirmarPagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
