import { Injectable } from '@angular/core';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private heroesURL = 'api/heroes';

  data: User[] = [{
    id: 1,
    name: "asjakjsa",
    lastName: "kasaks",
    age: 15,
    status: true
  },
  {
    id: 2,
    name: "aksaks",
    lastName: "aksask",
    age: 19,
    status: true
  },
  ];


  constructor() { }
  getData() {
    return this.data
  }
  addData(user: User) {
    this.data.push(user)
  }
}
