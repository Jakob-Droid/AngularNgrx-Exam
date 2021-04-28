import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EventElement } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventElement[]> {
    return this.http
      .get<EventElement[]>('/api/events')
      .pipe(tap((i) => console.log(i)));
  }
  getEvent(id: number) {
    return this.http
      .get<EventElement>('/api/events/' + id)
      .pipe(tap((i) => console.log(i)));
  }
}
