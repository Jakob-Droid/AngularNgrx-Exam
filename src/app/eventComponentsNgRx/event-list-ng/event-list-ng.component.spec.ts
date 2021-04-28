import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListNgComponent } from './event-list-ng.component';

describe('EventListNgComponent', () => {
  let component: EventListNgComponent;
  let fixture: ComponentFixture<EventListNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
