import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmigosComponent } from './add-amigos.component';

describe('AddAmigosComponent', () => {
  let component: AddAmigosComponent;
  let fixture: ComponentFixture<AddAmigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAmigosComponent]
    });
    fixture = TestBed.createComponent(AddAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
