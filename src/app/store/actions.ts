import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";
import { FilterBy } from "../models/filter-by";

export const LoadBooks = createAction('load books', props<{i:number, s:number, filterBy?:FilterBy}>());
export const BooksLoaded = createAction('books loaded', props<{ books: Book[] }>());
