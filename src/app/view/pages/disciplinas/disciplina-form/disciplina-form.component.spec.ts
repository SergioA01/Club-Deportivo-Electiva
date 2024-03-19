import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaFormComponent } from './disciplina-form.component';

describe('DisciplinaFormComponent', () => {
  let component: DisciplinaFormComponent;
  let fixture: ComponentFixture<DisciplinaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinaFormComponent]
    });
    fixture = TestBed.createComponent(DisciplinaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
