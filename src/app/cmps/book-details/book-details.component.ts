import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book?: Book;
  tmp?: Observable<Book>;
  id?: string;
  sub?: Subscription;
  constructor(private route: ActivatedRoute, private service: ApiService) { }

  ngOnInit(): void {
    // this.id = this.route.params.
    this.sub = this.route.params.subscribe(p => {
      this.id = p['id']
    })
    console.log(`🚀  this.id = `, this.id)
    this.tmp = this.service.getBookById(this.id)
    console.log(`this.tmp = `, this.tmp)

  }


}
