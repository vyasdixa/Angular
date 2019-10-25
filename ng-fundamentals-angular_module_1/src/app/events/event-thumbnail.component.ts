import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './events.models'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngStyle]="getEarlyStartStyles()" [ngClass]="getEarlyStartClass()" [ngSwitch]="event?.time" >
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
                <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
                <span *ngSwitchDefault> (Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div [hidden]="!event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>

            <div *ngIf="event?.onlineUrl">
                <span>Online URL: {{event?.onlineUrl}}</span>
            </div>

        </div>
    `,
    styles: [`
        .green {color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail{ height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
    @Input() event:IEvent

    getEarlyStartClass(){
        // const earlyStart = this.event.time && this.event.time === '8:00 am'
        // if(earlyStart)
        // return{green: earlyStart, bold: earlyStart}
        // return{}

        // if(this.event.time && this.event.time === '8:00 am')
        // return ['green', 'bold']
        // return[]

        if(this.event.time && this.event.time === '8:00 am')
        return ""
        return""

    }

    getEarlyStartStyles(){
        const earlyStart = this.event.time && this.event.time === '8:00 am'
        if(earlyStart)
        return{color: '#003300','font-weight': 'bold'}
        return{}

        // if(this.event.time && this.event.time === '8:00 am')
        // return ['green', 'bold']
        // return[]

        // if(this.event.time && this.event.time === '8:00 am')
        // return "bold"
        // return""

    }
    
}