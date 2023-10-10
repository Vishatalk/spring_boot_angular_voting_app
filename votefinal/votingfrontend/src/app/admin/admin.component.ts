import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {


  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  check() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      alert("Login Successful")
      this.router.navigate(['/admindashboard'])
      this.invalidLogin = false

    } else

    // this.router.navigate(['/admindashboard'])

      this.invalidLogin = true
  }



}
