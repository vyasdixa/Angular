import { Injectable } from '@angular/core'
import { IEvent } from '../events.models'

@Injectable()
export class EventService{

		getEvents():IEvent[]{
			return EVENTS
		}

		getEvent(id):IEvent {
			return EVENTS.find(event => event.id == id )
    }
    
    setEvent(){
      return EVENTS.values()
    }

    addEvent(event) {
      event.id=999
      EVENTS.push(event)
    }

}
	const EVENTS:IEvent[] = [
        {
          id: 1,
          name: 'Angular Connect',
          date: new Date('9/26/2036'),
          time: '10:00 am',
          price: 599.99,
          imageUrl: '/assets/images/angularconnect-shield.png',
          location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
          }          
        },
        {
          id: 2,
          name: 'ng-nl',
          date: new Date('4/15/2037'),
          time: '9:00 am',
          price: 950.00,
          imageUrl: '/assets/images/ng-nl.png',
          onlineUrl: 'https://www.busyqa.com',
 
        },
        {
          id: 3,
          name: 'ng-conf 2037',
          date: new Date('5/4/2037'),
          time: '9:00 am',
          price: 759.00,
          imageUrl: '/assets/images/ng-conf.png',
          location: {
            address: 'The Palatial America Hotel',
            city: 'Salt Lake City',
            country: 'USA'
          }
          
        },
        {
          id: 4,
          name: 'UN Angular Summit',
          date: new Date('6/10/2037'),
          time: '8:00 am',
          price: 800.00,
          imageUrl: '/assets/images/basic-shield.png',
          location: {
            address: 'The UN Angular Center',
            city: 'New York',
            country: 'USA'
          }
        },
        {
          id: 5,
          name: 'ng-vegas',
          date: new Date('2/10/2037'),
          time: '9:00 am',
          price: 400.00,
          imageUrl: '/assets/images/ng-vegas.png',
          location: {
            address: 'The Excalibur',
            city: 'Las Vegas',
            country: 'USA'
          }
        }
      ]