import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventElement } from 'src/app/models/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  selectedEvent$: Observable<EventElement>;
  eventId: number;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((e) => (this.eventId = +e.id));
    this.selectedEvent$ = this.eventService.getEvent(this.eventId);
  }
}
