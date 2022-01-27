import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/list-user/list-user.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http:HttpClient) { }


  listUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'users');
  }
  ViewUsers(id: string){
    return this.http.get(this.baseUrl + 'users/' + id);
  }
  addUser(userObj:any){
    return this.http.post(this.baseUrl + 'users', userObj);
  }
  deleteUser(id:any){
    return this.http.delete(this.baseUrl + 'users/' + id);
  }
  updateUser(id:string, userObj:any){
     return this.http.put(this.baseUrl + 'users/' + id, userObj);
  }
  
}
