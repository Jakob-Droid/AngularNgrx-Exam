import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailNgComponent } from './event-detail-ng.component';

describe('EventDetailNgComponent', () => {
  let component: EventDetailNgComponent;
  let fixture: ComponentFixture<EventDetailNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
