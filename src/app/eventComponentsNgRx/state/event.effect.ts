import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { getHasLoadedFromApi } from '.';
import { EventServiceNg } from '../event-ng.service';
import { eventApiActions, eventPageActions } from './actions';
import { EventState } from './event.reducer';

@Injectable()
export class EventEffects {
  constructor(
    private eventService: EventServiceNg,
    private action$: Actions,
    private store: Store<EventState>
  ) {}

  loadEvents$ = createEffect(() =>
    this.action$.pipe(
      ofType(eventPageActions.loadEvents),
      withLatestFrom(this.store.select(getHasLoadedFromApi)),
      filter(([_, hasLoaded]) => !hasLoaded), // _ means I'm not interested in the property
      mergeMap(() =>
        this.eventService.getEvents().pipe(
          map((events) => eventApiActions.loadEventsSuccess({ events })),
          catchError((error) => {
            return of(eventApiActions.loadEventsFailure({ error }));
          })
        )
      )
    )
  );
}
