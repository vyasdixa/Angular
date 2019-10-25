import { Component, OnInit, Injectable } from '@angular/core'
import { EventService } from './shared/event.sevice';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './events.models';


@Component({
    template: `
        <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
            <div class="row">
                    <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail [event]="event" (click)="handleClick(event)"></event-thumbnail>
                    </div>
             </div>
         </div>
    `,
    styles: [`
        .well div { color: red; }
    `]
})




@Injectable()
export class EventsListComponent implements OnInit {
    events:IEvent[]
    constructor(private eventService:EventService, private toastr:ToastrService){//construction

    }

    ngOnInit(): void {//loading
      this.events = this.eventService.getEvents()
    }
    
    handleClick(event){
     // console.log(eventName)
        if (event.time === '8:00 am')
            this.toastr.success(event.name, "Early event")
        else if (event.time === '10:00 am')
            this.toastr.warning(event.name, "Late event")
        else 
            this.toastr.info(event.name, "Normal event")
    }

}