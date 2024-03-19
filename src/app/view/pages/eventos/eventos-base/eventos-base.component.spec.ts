import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosBaseComponent } from './eventos-base.component';

describe('EventosBaseComponent', () => {
  let component: EventosBaseComponent;
  let fixture: ComponentFixture<EventosBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosBaseComponent]
    });
    fixture = TestBed.createComponent(EventosBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
