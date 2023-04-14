import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  Users: any[] = []

  constructor(private http: HttpClient) {
    this.GetUsers().subscribe((data: any) => {
      this.Users = data
    })
  }

  // get users
  GetUsers() {
    return this.http.get("http://localhost:3000/SignUp")
  }

  // send new users to database
  PostUsers(user: any) {
    return this.http.post("http://localhost:3000/SignUp", user)
  }

  // check if the email is exist
  ExistEmails(email: any) {
    return this.Users.find(user => user.Email == email)
  }
}
