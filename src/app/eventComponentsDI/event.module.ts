import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventService } from './event.service';

@NgModule({
  declarations: [EventComponent, EventListComponent, EventDetailComponent],
  imports: [CommonModule, EventRoutingModule],
  providers: [EventService],
})
export class EventModule {}
