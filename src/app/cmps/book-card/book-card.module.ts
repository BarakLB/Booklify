import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule, MatCardModule, RouterModule
  ],
  declarations: [BookCardComponent],
  exports: [BookCardComponent],
})
export class BookCardModule { }
