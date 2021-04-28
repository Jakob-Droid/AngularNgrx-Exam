import { createReducer, on } from '@ngrx/store';
import { EventElement } from 'src/app/models/event';

import { eventApiActions, eventPageActions } from './actions/index';

export interface EventState {
  events: EventElement[];
}
const initialState: EventState = {
  events: [],
};

//reducer

export const eventReducer = createReducer(
  initialState,
  on(eventPageActions.loadEvents, (state) => {
    return {
      //spreading the state to allow nonchanged state to be copied
      ...state,
      //overwriting the events array with the new events
      events: state.events,
    };
  })
);
