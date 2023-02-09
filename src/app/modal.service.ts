import { Injectable } from '@angular/core';
import { Modal } from './modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modal = new Subject<Modal | undefined>();
  get modal() {
    return this._modal.asObservable();
  }

  open(modal: Modal) {
    this._modal.next(modal);
  }

  close() {
    this._modal.next(undefined);
  }
}
