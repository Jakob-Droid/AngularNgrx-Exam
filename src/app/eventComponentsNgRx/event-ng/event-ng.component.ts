import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventElement } from 'src/app/models/event';

@Component({
  selector: 'app-event-ng',
  templateUrl: './event-ng.component.html',
  styleUrls: ['./event-ng.component.css'],
})
export class EventNgComponent implements OnInit {
  @Input() public event: EventElement;
  @Output() OnDeleteEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteEvent() {
    this.OnDeleteEvent.emit(this.event.id);
  }
}
