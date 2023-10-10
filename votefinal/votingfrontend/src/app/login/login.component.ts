import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  employees: any[] = [];

  ngOnInit() {
    this.httpClientService.getUser().subscribe(
      (response: any) => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response:any[]) {
    this.employees = response;
  }

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService,private httpClientService: HttpClientService) { }

    log(){
      this.router.navigate(['signin'])
    }

checkLogin() {
  const matchedEmployee = this.employees.find(
    (employee) => employee.email === this.username && employee.password === this.password
  );

  if (matchedEmployee) {
    this.router.navigate(['voterpage']);
  } else {
    alert("Username & Password are incorrect. Please try again.");
    // this.router.navigate(['voterpage']);
  }
}

}
