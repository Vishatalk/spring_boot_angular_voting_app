import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class userrr{
  constructor(public name:string,
    public age:string,
    public email:string,
    public password:string
    ){ }
}
export class login{
  constructor(
    public email:string,
    public password:string
    ){ }
}
export class party{
  constructor(public Bjp:string,
    public Knp:string,
    public aap:string,
    public spa:string
    ){ }
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient) { }

    getUserlogin()
    {
      console.log("test call");
      return this.httpClient.get<userrr>('http://localhost:8083/users');
    }

    getUser()
  {
    console.log("test call");
    return this.httpClient.get<login>('http://localhost:8083/users');
  }

  public createEmployee(employee: any) {
    return this.httpClient.post<userrr>('http://localhost:8083', employee);
  }

  public createvote(vote: any) {
    return this.httpClient.post<party>('http://localhost:8083/party', vote);
  }
}
