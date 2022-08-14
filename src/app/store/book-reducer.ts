import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book";
import { FilterBy } from "../models/filter-by";
import { BooksLoaded } from "./actions";

export interface booklifyState {
  books: Book[];
  filterBy: FilterBy | null;
  totalBooks?: number;
}

export interface AppState {
  books:booklifyState
}
const initialState:booklifyState = {
  books: [],
  filterBy: null,
  totalBooks: 0,
}
export const reducer = createReducer<booklifyState>(
  initialState,
  on(BooksLoaded, (state, { books }) => ({ ...state, books })),
)
