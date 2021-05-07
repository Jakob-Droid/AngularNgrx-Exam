import { createReducer, on } from '@ngrx/store';
import { EventElement } from 'src/app/models/event';

import { eventApiActions, eventPageActions } from './actions/index';

export interface EventState {
  events: EventElement[];
  error: string;
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
  on(
    eventApiActions.loadEventsSuccess,
    (state, action): EventState => {
      return {
        //spreading the state to allow nonchanged state to be copied
        ...state,
        //overwriting the events array with the new events
        events: action.events,
        hasLoadedFromApi: true,
        error: '',
      };
    }
  ),
  on(
    eventApiActions.loadEventsFailure,
    (state, action): EventState => {
      return {
        ...state,
        events: [],
        error: action.error,
      };
    }
  ),
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
  })
);
