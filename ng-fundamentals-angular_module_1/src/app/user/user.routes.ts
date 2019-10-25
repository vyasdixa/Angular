import { Routes } from "@angular/router"
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { Error404Component } from './404.component'

export const userRoutes:Routes = [

	{ path: '', redirectTo: '404', pathMatch: 'full', data:{requiresLogin: true} },
	{ path: 'profile', component: ProfileComponent, data:{requiresLogin: true} },
	{ path: 'login', component: LoginComponent },
	{ path: '404', component: Error404Component, data:{requiresLogin: true} },
	
]