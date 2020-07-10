import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// ---------------MODELS--------------- //
import { User } from '../models/user.model';
import { Repo } from '../models/repo.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  // ---------------CONSTRUCTOR--------------- //
  constructor(private http: HttpClient) {}

  // ---------------VARIABLES--------------- //

  url: string = 'https://api.github.com/users';

  // ---------------FUNCTIONS--------------- //

  getUser(user) {
    // console.log(`${this.url}/${user}`);
    return this.http.get<User>(`${this.url}/${user}`);
  }
  getRepos(user) {
    // console.log(`${this.url}/${user}/repos`);
    return this.http.get<Repo[]>(`${this.url}/${user}/repos?per_page=100`);
  }
}
