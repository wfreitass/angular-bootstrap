import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { GridComponent } from './grid/grid.component';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ModalComponent, GridComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
