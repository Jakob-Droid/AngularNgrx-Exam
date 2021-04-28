import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventNgRoutingModule } from './event-ng-routing.module';
import { EventNgComponent } from './event-ng/event-ng.component';
import { EventListNgComponent } from './event-list-ng/event-list-ng.component';
import { EventDetailNgComponent } from './event-detail-ng/event-detail-ng.component';
import { EventServiceNg } from './event-ng.service';

@NgModule({
  declarations: [
    EventNgComponent,
    EventListNgComponent,
    EventDetailNgComponent,
  ],
  imports: [CommonModule, EventNgRoutingModule],
  providers: [EventServiceNg],
})
export class EventNgModule {}
