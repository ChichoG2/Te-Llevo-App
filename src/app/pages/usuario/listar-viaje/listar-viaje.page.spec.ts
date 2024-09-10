import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarViajePage } from './listar-viaje.page';

describe('ListarViajePage', () => {
  let component: ListarViajePage;
  let fixture: ComponentFixture<ListarViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
