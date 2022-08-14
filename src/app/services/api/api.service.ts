import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Book } from 'src/app/models/book';
import { FilterBy } from 'src/app/models/filter-by';

// export interface BooksRes {
//   kind: string;
//   totalItems: number;
//   items: any[]
// }

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTotalBooks(filterBy: FilterBy = {}) {
    if (!filterBy.q) filterBy.q = 'angular';
    const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${filterBy.q}`
    return this.http.get(url).pipe(map((res: any) => res.totalItems))
  }

  getBookById(id: any) {
    const url = `https://www.googleapis.com/books/v1/volumes/${id}`
    return this.http.get(url).pipe(
      map((el: any) => {
        const { id } = el
        const { title, authors, language, publishedDate, description,
          subtitle, pageCount, imageLinks, categories } = el.volumeInfo
        return {
          id,
          title,
          authors,
          language,
          publishedDate,
          description,
          imageLinks,
          subtitle,
          pageCount,
          categories,
          listPrice: {
            price: getRandomIntInclusive(10, 200),
            isOnSale: getRandomBoolean()
          }
        }
      })
    )
  }
  getBooks(i: number = 0, s: number = 10, filterBy: FilterBy = {}): Observable<Book[]> {
    if (!filterBy.q) filterBy.q = 'angular';
    const query = new URLSearchParams({
      ...filterBy,
      printType: 'books',
      startIndex: String(i),
      maxResults: String(s)
    })
    const url = `https://www.googleapis.com/books/v1/volumes?${query.toString()}`
    return this.http.get(url).pipe(
      map((res: any) => res.items.map((el: any) => {
        const { id } = el
        const { title, authors, language, publishedDate, description,
          subtitle, pageCount, imageLinks, categories } = el.volumeInfo
        return {
          id,
          title,
          authors,
          language,
          publishedDate,
          description,
          imageLinks,
          subtitle,
          pageCount,
          categories,
          listPrice: {
            price: getRandomIntInclusive(10, 200),
            isOnSale: getRandomBoolean()
          }
        }
      })),
    )
  }
}

function getRandomBoolean() {
  return Math.random() < 0.5
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
