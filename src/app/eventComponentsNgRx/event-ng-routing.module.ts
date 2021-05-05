import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailNgComponent } from './event-detail-ng/event-detail-ng.component';
import { EventListNgComponent } from './event-list-ng/event-list-ng.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EventListNgComponent },
  {
    path: 'events/:id',
    component: EventDetailNgComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventNgRoutingModule {}
