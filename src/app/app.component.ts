import { Component, inject } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private modalService = inject(ModalService);

  openModal() {
    this.modalService.open({title: 'hey there', body: 'this is just a dummy modal'});
  }
}
