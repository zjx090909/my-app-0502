import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Myapp } from './myapp';

@Injectable({
  providedIn: 'root'
})
export class MyappService {

  constructor(private http:HttpClient) { }

//get all records
getAll():Observable<Myapp[]>{
  return this.http.get<Myapp[]>("http://localhost:8080/users");
}

// add records
create(payload:Myapp): Observable<Myapp>{
  return this.http.post<Myapp>("http://localhost:8080/users", payload);
}
}
