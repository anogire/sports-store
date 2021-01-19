import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const LOGIN = 'admin';
const PASSWORD = 'secret';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuth: boolean = false;

  constructor() { }

  get isAuth(): boolean {
    return this._isAuth;
  }

  public login(login: string, password: string): Observable<string | null> {
    return new Observable<string>((observer) => {
      if (login === LOGIN && password === PASSWORD) {
        this._isAuth = true;
        observer.next('is_auth');
        observer.complete();
      } else {
        observer.next(null);
        observer.complete();
      }
    })
  }

  public logout(): Observable<any> {
    this._isAuth = false;
    return of({});
  }
}