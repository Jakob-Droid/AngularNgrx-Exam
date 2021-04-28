import { Component, Input, OnInit } from '@angular/core';
import { EventElement } from 'src/app/models/event';

@Component({
  selector: 'app-event-ng',
  templateUrl: './event-ng.component.html',
  styleUrls: ['./event-ng.component.css'],
})
export class EventNgComponent implements OnInit {
  @Input() public event: EventElement;
  constructor() {}

  ngOnInit(): void {}
}
