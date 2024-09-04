import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsociarCuentaPage } from './asociar-cuenta.page';

describe('AsociarCuentaPage', () => {
  let component: AsociarCuentaPage;
  let fixture: ComponentFixture<AsociarCuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
