import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/eventComponentsDI/event.service';
import { EventElement } from 'src/app/models/event';
import { getError, getEvents, State } from '../state';
import {} from '../state';
import { eventPageActions } from '../state/actions';
import { EventState } from '../state/event.reducer';

@Component({
  selector: 'app-event-list-ng',
  templateUrl: './event-list-ng.component.html',
  styleUrls: ['./event-list-ng.component.css'],
})
export class EventListNgComponent implements OnInit {
  events$: Observable<EventElement[]>;
  error$: Observable<string>;

  // events: EventElement[];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    //dispatches the loadEvents action to load the events :D
    // this.events$ = this.store.select(getEvents);

    this.store.dispatch(eventPageActions.loadEvents());

    //selects the slice of data from the store, and gives the variable a reference
    this.events$ = this.store.select(getEvents);
    this.error$ = this.store.select(getError);

    //Not the right way to do it, however it is show in my synopsis
    // this.store.subscribe((state: State) => (this.events = state.events.events));
  }
}
