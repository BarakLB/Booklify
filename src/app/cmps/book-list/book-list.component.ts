import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[] = []
  @Output() currBook = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  emitBook(book: Book) {
    // console.log(`book = `, book)
    this.currBook.emit(book)
  }
}
