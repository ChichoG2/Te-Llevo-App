import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexConductorPage } from './index-conductor.page';

describe('IndexConductorPage', () => {
  let component: IndexConductorPage;
  let fixture: ComponentFixture<IndexConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
