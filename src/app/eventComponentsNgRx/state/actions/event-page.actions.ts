import { createAction, props } from '@ngrx/store';

export const loadEvents = createAction('[Event Page] Load');

export const loadEvent = createAction(
  '[Event Page] Get single event by id',
  props<{ id: number }>()
);
