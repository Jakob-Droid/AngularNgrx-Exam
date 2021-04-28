import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListNgComponent } from './event-list-ng/event-list-ng.component';

const routes: Routes = [{ path: '', component: EventListNgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventNgRoutingModule {}
