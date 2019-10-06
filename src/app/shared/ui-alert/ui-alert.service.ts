import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UiAlertMessage {
  text: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class UiAlertService {

  private timeId;
  private _message = new BehaviorSubject<UiAlertMessage>(null);

  get message$(): Observable<UiAlertMessage> {
    return this._message.asObservable();
  }

  success(message: string) {
    this._message.next({ text: message, type: 'success' });
    this.clearWithTimeout();
  }

  error(message: string) {
    this._message.next({ text: message, type: 'danger' });
    this.clearWithTimeout();
  }

  clearWithTimeout() {
    clearInterval(this.timeId);
    this.timeId = setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear() {
    this._message.next(null);
  }
}
