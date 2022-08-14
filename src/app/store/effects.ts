
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, tap, of } from 'rxjs';
import { ApiService } from '../services/api/api.service';
import { BooksLoaded, LoadBooks } from './actions';
@Injectable()
export class Effects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadBooks),
      mergeMap(({ i, s, filterBy }) => this.service.getBooks(i, s, filterBy)),
      tap(res => console.log(`res = `, res)),
      map((books) => BooksLoaded({ books })),
      catchError(() => of(BooksLoaded({ books: [] }))),
    ),
  );

  constructor(private readonly actions$: Actions, private readonly service: ApiService) { }
}
