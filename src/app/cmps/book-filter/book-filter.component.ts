import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, fromEvent, interval, of, take, tap } from 'rxjs';

// export interface FilterB

@Component({
  selector: 'book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.scss']
})
export class BookFilterComponent implements AfterViewInit {
  text: string = '';
  @ViewChild('input', { read: ElementRef }) ref?: ElementRef
  @Output() filterBy = new EventEmitter()
  ngAfterViewInit(): void {
    fromEvent(this.ref?.nativeElement, 'keyup').pipe(
      debounceTime(1000),
    ).subscribe(() => this.filterBy.emit(this.text))
  }
}
