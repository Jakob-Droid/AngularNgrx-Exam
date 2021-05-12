import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { EventElement } from 'src/app/models/event';
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

  createEvent$ = createEffect(() =>
    this.action$.pipe(
      ofType(eventPageActions.createEvent),
      concatMap((action) =>
        this.eventService.postEvent(action.event).pipe(
          map((event) => eventApiActions.createEventSuccess({ event })),
          catchError((error) =>
            of(eventApiActions.createEventFailure({ error }))
          )
        )
      )
    )
  );
  deleteEvent$ = createEffect(() =>
    this.action$.pipe(
      ofType(eventPageActions.deleteEvent),
      mergeMap((action) =>
        this.eventService.deleteEvent(action.id).pipe(
          map(
            () => eventApiActions.deleteEventSuccess({ id: action.id }),
            catchError((error) =>
              of(eventApiActions.deleteEventFailure({ error }))
            )
          )
        )
      )
    )
  );
}
