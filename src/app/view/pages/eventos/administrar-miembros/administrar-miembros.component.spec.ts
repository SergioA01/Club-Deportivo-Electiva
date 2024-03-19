import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarMiembrosComponent } from './administrar-miembros.component';

describe('AdministrarMiembrosComponent', () => {
  let component: AdministrarMiembrosComponent;
  let fixture: ComponentFixture<AdministrarMiembrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrarMiembrosComponent]
    });
    fixture = TestBed.createComponent(AdministrarMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
