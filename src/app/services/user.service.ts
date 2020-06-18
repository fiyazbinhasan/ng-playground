import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, debounceTime } from "rxjs/operators";

import { User, users } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getByEmail(email: string): Observable<User | undefined> {
    const user = users.find(user => user.email === email);
    return of(user).pipe(delay(500));
  }
}
