import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { map, Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { FilterBy } from 'src/app/models/filter-by';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'ms-books',
  templateUrl: './ms-books.component.html',
  styleUrls: ['./ms-books.component.scss']
})
export class MsBooksComponent implements OnInit {
  books$?: Observable<Book[]>
  filterBy: FilterBy | null = null;
  totalBooks?: Observable<number>;
  pageEvent?: PageEvent;
  offset?: number;
  currBook?: Book;
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.books$ = this.service.getBooks(0, 24)
    this.totalBooks = this.service.getTotalBooks()
  }
  filterBooks(q: string) {
    this.filterBy = { q }
    console.log(`this.filterBy = `, this.filterBy)
    this.books$ = this.service.getBooks(0, 10, { ...this.filterBy })
    this.totalBooks = this.service.getTotalBooks({ ...this.filterBy })
  }
  handlePagination(ev: PageEvent) {
    console.log(`ev = `, ev)
    this.offset = ((ev.pageIndex + 1) - 1) * ev.pageSize;
    this.books$ = this.service.getBooks(this.offset, ev.pageSize)
      .pipe(map(res => res.slice(0, ev.pageSize)))
  }

  bookToShow(book: Book) {
    console.log(`book = `, book)
    this.currBook = book
  }
}
