import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLikeComponent } from './lista-like.component';

describe('ListaLikeComponent', () => {
  let component: ListaLikeComponent;
  let fixture: ComponentFixture<ListaLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLikeComponent]
    });
    fixture = TestBed.createComponent(ListaLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
