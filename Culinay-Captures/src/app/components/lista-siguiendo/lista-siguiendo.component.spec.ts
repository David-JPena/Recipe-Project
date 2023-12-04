import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSiguiendoComponent } from './lista-siguiendo.component';

describe('ListaSiguiendoComponent', () => {
  let component: ListaSiguiendoComponent;
  let fixture: ComponentFixture<ListaSiguiendoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSiguiendoComponent]
    });
    fixture = TestBed.createComponent(ListaSiguiendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
