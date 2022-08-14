import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { FilterBy } from 'src/app/models/filter-by';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadBooks } from 'src/app/store/actions';
import { AppState, booklifyState } from 'src/app/store/book-reducer';

@Component({
  selector: 'ms-books',
  templateUrl: './ms-books.component.html',
  styleUrls: ['./ms-books.component.scss']
})
export class MsBooksComponent implements OnInit {
  books?: Observable<Book[]>;
  filterBy: FilterBy | null = null;
  totalBooks?: Observable<number>;
  pageEvent?: PageEvent;
  offset: number =0;
  pageSize: number = 10;
  currBook?: Book;
  books$: Observable<any> = this.store.select((state) => state.books.books);
  constructor(private service: ApiService, private readonly store: Store<AppState>) {
    // cards$: Observable<Card[]> = this.store.select((state) => state.page.cards);
  }

  ngOnInit(): void {
    // this.books = this.service.getBooks(0, 24)
    this.store.dispatch(LoadBooks({ i: 0, s: 24 }))
    console.log(`this.books$ = `, this.books$)
    // console.log(`🚀  x = `, x)
    this.totalBooks = this.service.getTotalBooks()
  }
  filterBooks(q: string) {
    this.filterBy = { q }
    this.store.dispatch(LoadBooks({ i: this.offset, s: this.pageSize, filterBy: this.filterBy }))
    this.totalBooks = this.service.getTotalBooks({ ...this.filterBy })
  }
  handlePagination(ev: PageEvent) {
    console.log(`ev = `, ev)
    this.pageSize = ev.pageSize
    this.offset = ((ev.pageIndex + 1) - 1) * ev.pageSize;
    // this.books = this.service.getBooks(this.offset, ev.pageSize)
    //   .pipe(map(res => res.slice(0, ev.pageSize)))
    this.store.dispatch(LoadBooks({ i: this.offset, s: ev.pageSize }))
  }

  bookToShow(book: Book) {
    console.log(`book = `, book)
    this.currBook = book
  }
}
