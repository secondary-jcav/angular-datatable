import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JSONPlaceholder } from '../../interfaces/jsonPlaceholder';
import { JSONPlaceholderPosts } from '../../interfaces/jsonPlaceholderPosts';

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

  usersPosts(): Observable<JSONPlaceholderPosts> {
    return this.http.get<JSONPlaceholderPosts>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
