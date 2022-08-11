import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFilterComponent } from './book-filter.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [BookFilterComponent],
  exports: [BookFilterComponent]
})
export class BookFilterModule { }
