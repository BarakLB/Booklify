import { createReducer, on } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { Book } from "../models/book";
import { FilterBy } from "../models/filter-by";
import { BooksLoaded } from "./actions";

export interface booklifyState {
  books: Book[];
  filterBy: FilterBy | null;
  totalBooks?: number;
}

const initialState:booklifyState = {
books: [],
filterBy: null,
totalBooks: 0,
}
export const reducer = createReducer(
  initialState,
  on(BooksLoaded, (state, { books }) => ({ ...state, books })),
)
