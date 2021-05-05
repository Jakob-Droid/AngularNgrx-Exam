import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventElement } from 'src/app/models/event';
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
export const getSelectedEventId = createSelector(
  getEventsFeatureState,
  (state) => state.selectedEventId
);
export const getEvent = createSelector(
  getEventsFeatureState,
  getSelectedEventId,
  (state, selectedId) => {
    if (selectedId === 0) {
      return {
        id: 0,
        description: '',
        duration: 0,
        imagePath: '',
        presenter: '',
        rating: 0,
        startDate: '',
        title: '',
        location: {},
      } as EventElement;
    } else {
      return selectedId ? state.events.find((e) => e.id === selectedId) : null;
    }
  }
);
export const getError = createSelector(
  getEventsFeatureState,
  (state) => state.error
);
export const getHasLoadedFromApi = createSelector(
  getEventsFeatureState,
  (state) => state.hasLoadedFromApi
);
