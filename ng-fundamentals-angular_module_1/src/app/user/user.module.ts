import { NgModule } from "@angular/core";
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { Error404Component } from './404.component';

@NgModule({
	declarations: [
		ProfileComponent,
		LoginComponent,
		Error404Component,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(userRoutes)
	],
	providers: []

})

export class UserModule {

}