import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as appState from 'src/app/state/state';
import { EventState } from './event.reducer';

// Extends the app state to include the event feature.
// This is required because events are lazy loaded.
// So the reference to eventstate cannot be added to app.state.ts directly.
//States :
export interface State extends appState.State {
  events: EventState;
}

//A selector for the featured state declared in the forfeature method in the event-ng.module.ts
const getEventsFeatureState = createFeatureSelector<EventState>('events');

export const getEvents = createSelector(
  getEventsFeatureState,
  (state) => state.events
);
