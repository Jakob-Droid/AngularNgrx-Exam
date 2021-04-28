import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventElement } from 'src/app/models/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events$: Observable<EventElement[]>;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events$ = this.eventService.getEvents();
  }
}
