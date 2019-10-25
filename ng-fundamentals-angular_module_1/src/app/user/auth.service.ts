import { Injectable } from "@angular/core";
import { Iuser } from './user.model';

@Injectable()
export class AuthService {
	loginUser(userName: any, password: any) {
		throw new Error("Method not implemented.");
	}

	currentUser: Iuser
	login(userName: string, password: string){
		this.currentUser = {
			id: 1,
			userName: userName,
			firstName: 'Dixa',
			lastName: 'vyas'
			
		}
	}
	isAuthenticated() {
        return !!this.currentUser
	}
	
	getFirstname(){
		if(this.isAuthenticated){
		return this.currentUser.firstName
		}
		return ' '
	}

	getLastname(){
		if(this.isAuthenticated){
		return this.currentUser.lastName
		}
	return ' '
	}

	getFullname(){
		if(this.isAuthenticated){
		return this.currentUser.firstName + " " + this.currentUser.lastName
		}
	return ' '
	}

	updateCurrentUser(firstName:string, lastName:string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

}
