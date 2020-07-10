import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'; 

// ---------------MODELS--------------- //
import { User } from '../models/user.model';
import { Repo } from '../models/repo.model';

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  // ---------------CONSTRUCTOR--------------- //
  constructor() {}

  // ---------------VARIABLES--------------- //
  private messenger = new BehaviorSubject<any>('');

  // ---------------FUNCTIONS--------------- //
  public getUser(): Observable<User> {
    return this.messenger.asObservable();
  }

  public postUser(user: User) {
    this.messenger.next(user);
  }
}
