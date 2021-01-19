import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  constructor() { }

  public confirm(): boolean {
    return confirm('are you sure?');
  }
}
