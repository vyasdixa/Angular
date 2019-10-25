import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from '../common/toastr.service';
import { Router } from '@angular/router';

@Component({
	templateUrl: './profile.component.html',
	styles: [` 
	.error{ backgroundcolor:#E05C65; }
	`]
})
export class ProfileComponent implements OnInit {

	profileForm:FormGroup
	   constructor(private auth:AuthService,private router:Router, private toastr:ToastrService){}

	   ngOnInit(): void {

			this.profileForm = new FormGroup({
				
				firstName: new FormControl(this.auth.getFirstname(), Validators.required),
				lastName:  new FormControl(this.auth.getLastname(),  Validators.required)
			})
	   }

	   saveProfile(formValues) {
		if (this.profileForm.valid) {
		  this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
		  this.toastr.success("Profile saved as " + formValues.firstName + " " + formValues.lastName)
		}
	}

	cancel() {
		this.router.navigate(['/events'])
	  }
}