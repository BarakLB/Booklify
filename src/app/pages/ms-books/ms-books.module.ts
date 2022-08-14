import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsBooksComponent } from './ms-books.component';
import { BookListModule } from '../../cmps/book-list/book-list.module';
import { BookFilterModule } from 'src/app/cmps/book-filter/book-filter.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderModule } from 'src/app/cmps/header/header.module';
import { BookDetailsModule } from '../../cmps/book-details/book-details.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    BookListModule,
    BookFilterModule,
    MatPaginatorModule,
    HeaderModule,
    BookDetailsModule,
    RouterModule
  ],
  declarations: [MsBooksComponent,],
  exports: [MsBooksComponent]
})
export class MsBooksModule { }
