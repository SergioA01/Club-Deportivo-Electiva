import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaBaseComponent } from './disciplina-base.component';

describe('DisciplinaBaseComponent', () => {
  let component: DisciplinaBaseComponent;
  let fixture: ComponentFixture<DisciplinaBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinaBaseComponent]
    });
    fixture = TestBed.createComponent(DisciplinaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
