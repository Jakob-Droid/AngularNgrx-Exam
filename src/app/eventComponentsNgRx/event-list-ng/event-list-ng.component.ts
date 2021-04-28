import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/eventComponentsDI/event.service';
import { EventElement } from 'src/app/models/event';

@Component({
  selector: 'app-event-list-ng',
  templateUrl: './event-list-ng.component.html',
  styleUrls: ['./event-list-ng.component.css'],
})
export class EventListNgComponent implements OnInit {
  events$: Observable<EventElement[]>;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events$ = this.eventService.getEvents();
  }
}
