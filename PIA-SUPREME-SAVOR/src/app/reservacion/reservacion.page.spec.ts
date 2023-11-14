import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservacionPage } from './reservacion.page';

describe('ReservacionPage', () => {
  let component: ReservacionPage;
  let fixture: ComponentFixture<ReservacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
