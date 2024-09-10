import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarViajeConductorPage } from './listar-viaje-conductor.page';

describe('ListarViajeConductorPage', () => {
  let component: ListarViajeConductorPage;
  let fixture: ComponentFixture<ListarViajeConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarViajeConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
