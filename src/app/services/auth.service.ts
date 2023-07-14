import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ="http://localhost:5110/api/Auth/"
  private baseUrl1:string ="http://localhost:5110/api/Message/"
  private baseUrl2:string ="http://localhost:5110/api/admin/"
  constructor(private http : HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  sendMessage(userObj: any) {
    return this.http.post<any>(`${this.baseUrl1}sendMessage`, userObj);
  }

  login(userObj: any){
    return this.http.post<any>(`${this.baseUrl}login`, userObj);
  }

  sendEmailUserTable(userObj: any){
    return this.http.post<any>(`${this.baseUrl2}admin`, userObj)
  }

  sendEmailUserMessage(userObj: any){
    return this.http.post<any>(`${this.baseUrl2}admin`, userObj)
  }

}
