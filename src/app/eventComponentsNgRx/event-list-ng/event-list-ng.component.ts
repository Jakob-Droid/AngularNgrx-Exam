import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/eventComponentsDI/event.service';
import { EventElement } from 'src/app/models/event';
import { getEvents, State } from '../state';
import {} from '../state';
import { eventPageActions } from '../state/actions';

@Component({
  selector: 'app-event-list-ng',
  templateUrl: './event-list-ng.component.html',
  styleUrls: ['./event-list-ng.component.css'],
})
export class EventListNgComponent implements OnInit {
  events$: Observable<EventElement[]>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    //selects the slice of data from the store, and gives the variable a reference
    this.events$ = this.store.select(getEvents);
    //dispatches the loadEvents action to load the events :D
    this.store.dispatch(eventPageActions.loadEvents());
  }
}
