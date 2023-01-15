import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JSONPlaceholder } from '../../interfaces/jsonPlaceholder';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  users(): Observable<JSONPlaceholder> {
    return this.http.get<JSONPlaceholder>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
