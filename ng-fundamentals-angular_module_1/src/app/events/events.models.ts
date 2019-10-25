import { Time } from '@angular/common';

export interface IEvent{
	id: number,
	name: string,
	date: Date,
	time: string,
	price: number,
	imageUrl: string
	onlineUrl?: string,
	location?: ILocation,
}

export interface ILocation{
	address: string,
	city: string,
	country: string,
}
