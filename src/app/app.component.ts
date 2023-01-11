import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calendar app';
  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(ModalComponent, {
      minWidth: 'fit-content',
    });
  }
}
