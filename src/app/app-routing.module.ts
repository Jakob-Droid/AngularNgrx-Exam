import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './eventComponentsDI/event-detail/event-detail.component';
import { EventListComponent } from './eventComponentsDI/event-list/event-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'events',
    loadChildren: () =>
      import('./eventComponentsDI/event.module').then((m) => m.EventModule),
  },
  {
    path: 'eventsNg',
    loadChildren: () =>
      import('./eventComponentsNgRx/event-ng.module').then(
        (m) => m.EventNgModule
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
