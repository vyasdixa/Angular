
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared/event.sevice'


@Component({
	templateUrl: './create-event.component.html',
	styles: [` 
	.error{ backgroundcolor:red }
	`]
	
})

export class CreateEventComponent {

    constructor(private eventService:EventService, private router:Router) {}

	saveEvent(formValues){
		this.eventService.addEvent(formValues)
		this.router.navigate(['/events'])
	}
	cancle(){
		this.router.navigate(['/events'])
	}

}