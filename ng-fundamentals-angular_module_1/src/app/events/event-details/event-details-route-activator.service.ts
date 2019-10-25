 import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from '../shared/event.sevice'


@Injectable()
export class EventDetailsRouteActivator implements CanActivate {

	constructor(private eventService:EventService, private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        if (!eventExists)
			this.router.navigate(['/404'])
        return eventExists
    }    
}