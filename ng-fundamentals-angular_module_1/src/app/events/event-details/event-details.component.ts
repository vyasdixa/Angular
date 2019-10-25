import { Component, OnInit } from "@angular/core";
import { EventService } from '../shared/event.sevice';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent implements OnInit{
	event:any
	constructor(private eventService:EventService, private route:ActivatedRoute){

	}

	ngOnInit(): void {
		//+is used to type casting in int
		this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
	}

}