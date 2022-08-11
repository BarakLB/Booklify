import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule, MatCardModule,
  ],
  declarations: [BookCardComponent],
  exports: [BookCardComponent],
})
export class BookCardModule { }
