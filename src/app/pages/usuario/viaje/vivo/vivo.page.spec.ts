import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VivoPage } from './vivo.page';

describe('VivoPage', () => {
  let component: VivoPage;
  let fixture: ComponentFixture<VivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
