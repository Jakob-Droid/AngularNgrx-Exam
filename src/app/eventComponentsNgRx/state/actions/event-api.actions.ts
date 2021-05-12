import { createAction, props } from '@ngrx/store';
import { EventElement } from 'src/app/models/event';

export const loadEventsSuccess = createAction(
  '[Events API] Load Success',
  props<{ events: EventElement[] }>()
);
export const loadEventsFailure = createAction(
  '[Events API] Load Failure',
  props<{ error: string }>()
);
export const createEventSuccess = createAction(
  '[Events API] Create Success',
  props<{ event: EventElement }>()
);
export const createEventFailure = createAction(
  '[Events API] Create Failure',
  props<{ error: string }>()
);
export const deleteEventSuccess = createAction(
  '[Event API] Delete Event Success',
  props<{ id: number }>()
);
export const deleteEventFailure = createAction(
  '[Event API] Delete Event Failure',
  props<{ error: string }>()
);
