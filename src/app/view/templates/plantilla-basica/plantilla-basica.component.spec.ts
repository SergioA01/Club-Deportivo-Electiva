import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaBasicaComponent } from './plantilla-basica.component';

describe('PlantillaBasicaComponent', () => {
  let component: PlantillaBasicaComponent;
  let fixture: ComponentFixture<PlantillaBasicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantillaBasicaComponent]
    });
    fixture = TestBed.createComponent(PlantillaBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
