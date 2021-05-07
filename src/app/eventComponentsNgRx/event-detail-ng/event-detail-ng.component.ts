import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventElement } from 'src/app/models/event';
import { EventServiceNg } from '../event-ng.service';
import { getEvent, getNiceDisplay } from '../state';
import { eventPageActions } from '../state/actions';
import { EventState } from '../state/event.reducer';

@Component({
  selector: 'app-event-detail-ng',
  templateUrl: './event-detail-ng.component.html',
  styleUrls: ['./event-detail-ng.component.css'],
})
export class EventDetailNgComponent implements OnInit {
  eventId;
  selectedEvent$: Observable<EventElement>;
  isNiceDisplay: Observable<boolean>;
  constructor(
    private route: ActivatedRoute,
    private store: Store<EventState>
  ) {}

  ngOnInit(): void {
    this.selectedEvent$ = this.store.select(getEvent);
    this.route.params.subscribe((e) => ({ id: (this.eventId = +e.id) }));
    this.store.dispatch(eventPageActions.loadEvent({ id: this.eventId }));
    this.isNiceDisplay = this.store.select(getNiceDisplay);
  }

  toggleNiceDisplay() {
    this.store.dispatch(eventPageActions.toggleNiceDisplay());
  }
}
