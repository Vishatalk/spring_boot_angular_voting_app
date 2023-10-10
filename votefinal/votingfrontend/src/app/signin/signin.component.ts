import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, userrr } from '../service/http-client.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
 user: userrr = new userrr("","","","");

  constructor(
    private httpClientService: HttpClientService,
     private router:Router
  ) { }

lo(){
  this.router.navigate(['login'])
}

  createEmployee(): void {
    if (!this.user.name|| !this.user.age || !this.user.email || !this.user.password) {
       alert("Please provide all user details (Name,Age,email, password).");
    } else {
      this.httpClientService.createEmployee(this.user)
        .subscribe(data => {
          alert("Record  created successfully.");
          this.router.navigate(['login']);
        });
    }}
}
