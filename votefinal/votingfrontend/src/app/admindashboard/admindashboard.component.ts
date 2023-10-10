import { Component } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent {


  employees: any[] = [];
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getUserlogin().subscribe(
      (response: any) => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response:any[]) {
    this.employees = response;
  }

}
