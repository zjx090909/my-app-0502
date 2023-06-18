import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  private request(method: string, url: string, data?: any) {

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
      }
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getUser() { //restful API
    return this.request('GET', `${environment.serverUrl}/users`); //http protocol
  }

  createUser(users) {
    return this.request('POST', `${environment.serverUrl}/users`, users);
  }

  updateUser(users) {
    return this.request('PUT', `${environment.serverUrl}/users/${users.id}`, users);
  }

  deleteUser(users) {
    return this.request('DELETE', `${environment.serverUrl}/users/${users.id}`);
  }
}