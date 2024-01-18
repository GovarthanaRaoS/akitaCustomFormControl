import { Query } from '@datorama/akita';
import { UserState, UserStore } from './user.store';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class UserQuery extends Query<UserState> {  

    // username$ = this.select('username');
    // password$ = this.select(state=>state.password);

  constructor(protected userStore: UserStore) {
    super(userStore);
  }

  getUsername(){
    return this.getValue().username;
  }

  getPassword(){
    return this.getValue().password;
  }

}