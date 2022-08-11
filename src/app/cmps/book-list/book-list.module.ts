import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookCardModule } from '../book-card/book-card.module';



@NgModule({
  imports: [
    CommonModule,
    BookCardModule,
  ],
  declarations: [BookListComponent],
  exports: [BookListComponent]
})
export class BookListModule { }
