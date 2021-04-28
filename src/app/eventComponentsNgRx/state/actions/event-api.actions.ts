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
