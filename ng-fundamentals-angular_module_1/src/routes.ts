import { Routes } from '@angular/router'
import { EventsListComponent } from './app/events/events-list.component'
import { EventDetailsComponent } from './app/events/event-details/event-details.component'
import { CreateEventComponent } from './app/events/create-event.component'
import { Error404Component } from './app/errors/404.component'
import { EventDetailsRouteActivator } from './app/events/event-details/event-details-route-activator.service'


export const appRoutes:Routes = [
	{ path: 'events/new', component: CreateEventComponent },
	{ path: 'events', component: EventsListComponent },
	{ path: 'events/:id', component: EventDetailsComponent, canActivate: [EventDetailsRouteActivator] },
	{ path: '404', component: Error404Component },
	{ path: '', redirectTo: '/events', pathMatch: 'full'},
	{ path: 'user', loadChildren: './user/user.module#UserModule' }
	
]
