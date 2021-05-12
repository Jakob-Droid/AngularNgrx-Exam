import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EventElement } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventServiceNg {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventElement[]> {
    console.log('ng-service');
    return this.http.get<EventElement[]>('/api/events').pipe(
      tap((i) => console.log(i)),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  getEvent(id: number) {
    console.log('ng-service');
    return this.http.get<EventElement>('/api/events/' + id).pipe(
      tap((i) => console.log(i)),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  postEvent(event: EventElement): Observable<EventElement> {
    console.log('ng-service');
    return this.http.post<EventElement>('/api/events', event).pipe(
      tap((i) => console.log(i)),
      catchError((err) => throwError(err))
    );
  }
  deleteEvent(id: number): Observable<{}> {
    console.log('ng-service');
    return this.http.delete<EventElement>('/api/events/' + id).pipe(
      tap((i) => console.log(i)),
      catchError((err) => throwError(err))
    );
  }
}
