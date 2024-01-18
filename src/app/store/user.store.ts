import { Injectable } from '@angular/core';
import { Store, StoreConfig, EntityState, EntityStore } from '@datorama/akita';
import { User } from '../user';

export interface UserState {
   username: string;
   password: string;
}

export function createInitialState(): UserState{
  return {
    username: '',
    password: ''
  };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'user', idKey: 'id' })
export class UserStore extends Store<UserState> {

  constructor() {
    super(createInitialState());
  }

}