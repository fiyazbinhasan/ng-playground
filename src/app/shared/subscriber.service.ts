import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  constructor() {}

  register(url: string, email: string): Observable<string | undefined> {
    // Create a POST request using the url and register email in the backend
    return of(
      `Please check your email (${email}) and confirm subscription`
    ).pipe(delay(500));
  }
}
