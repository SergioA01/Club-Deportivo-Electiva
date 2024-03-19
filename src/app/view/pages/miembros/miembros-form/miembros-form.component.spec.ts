import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosFormComponent } from './miembros-form.component';

describe('MiembrosFormComponent', () => {
  let component: MiembrosFormComponent;
  let fixture: ComponentFixture<MiembrosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiembrosFormComponent]
    });
    fixture = TestBed.createComponent(MiembrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
