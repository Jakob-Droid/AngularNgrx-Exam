import { createAction, createSelector, props } from '@ngrx/store';

export const loadEvents = createAction('[Event Page] Load');

export const loadEvent = createAction(
  '[Event Page] Get single event by id',
  props<{ id: number }>()
);
export const toggleNiceDisplay = createAction(
  '[Event Page] Toggle Nice Display'
);
