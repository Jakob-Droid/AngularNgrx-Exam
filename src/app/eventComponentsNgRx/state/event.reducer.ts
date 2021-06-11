import { Statement } from '@angular/compiler';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { EventElement } from 'src/app/models/event';

import { eventApiActions, eventPageActions } from './actions/index';

export interface EventState {
  events: EventElement[];
  error: string | null;
  hasLoadedFromApi: boolean;
  selectedEventId: number | null;
  showNiceDisplay: boolean;
}
const initialState: EventState = {
  events: [],
  error: '',
  hasLoadedFromApi: false,
  selectedEventId: null,
  showNiceDisplay: false,
};

//reducer

export const eventReducer = createReducer(
  initialState,
  on(eventApiActions.loadEventsSuccess, (state, action): EventState => {
    return {
      //spreading the state to allow nonchanged state to be copied
      ...state,
      //overwriting the events array with the new events
      events: action.events,
      hasLoadedFromApi: true,
      error: '',
    };
  }),
  on(eventApiActions.loadEventsFailure, (state, action): EventState => {
    return {
      ...state,
      events: [],
      error: action.error,
    };
  }),
  on(eventPageActions.loadEvent, (state, action) => {
    return {
      ...state,
      selectedEventId: action.id,
    };
  }),
  on(eventPageActions.toggleNiceDisplay, (state) => {
    return {
      ...state,
      showNiceDisplay: !state.showNiceDisplay,
    };
  }),
  on(eventApiActions.createEventSuccess, (state, action) => {
    return {
      ...state,
      error: null,
      events: [...state.events, action.event],
    };
  }),
  on(eventApiActions.createEventFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  //createEventsFailure :)

  on(eventApiActions.loadEventsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(eventApiActions.deleteEventSuccess, (state, action) => {
    return {
      ...state,
      error: null,
      events: state.events.filter((x) => x.id !== action.id),
    };
  }),
  on(eventApiActions.deleteEventFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
