import { Component, Input, OnInit } from '@angular/core';
import { EventElement } from '../../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() public event: EventElement;

  constructor() {}

  ngOnInit(): void {}
}
