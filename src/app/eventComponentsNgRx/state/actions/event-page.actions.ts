import { createAction, props } from '@ngrx/store';
import { EventElement } from 'src/app/models/event';

export const loadEvents = createAction('[Event Page] Load');

export const loadEvent = createAction(
  '[Event Page] Get single event by id',
  props<{ id: number }>()
);
export const toggleNiceDisplay = createAction(
  '[Event Page] Toggle Nice Display'
);
export const createEvent = createAction(
  '[Event Page] Creating new Event',
  props<{ event: EventElement }>()
);
export const deleteEvent = createAction(
  '[Event Page] Deleting Event',
  props<{ id: number }>()
);
