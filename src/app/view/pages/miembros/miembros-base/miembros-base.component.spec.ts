import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosBaseComponent } from './miembros-base.component';

describe('MiembrosBaseComponent', () => {
  let component: MiembrosBaseComponent;
  let fixture: ComponentFixture<MiembrosBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiembrosBaseComponent]
    });
    fixture = TestBed.createComponent(MiembrosBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
