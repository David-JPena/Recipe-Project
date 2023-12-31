import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPrincipalComponent } from './contenido-principal.component';

describe('ContenidoPrincipalComponent', () => {
  let component: ContenidoPrincipalComponent;
  let fixture: ComponentFixture<ContenidoPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoPrincipalComponent]
    });
    fixture = TestBed.createComponent(ContenidoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
