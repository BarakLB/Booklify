import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsBooksModule } from './pages/ms-books/ms-books.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './cmps/header/header.module';
import { BookDetailsComponent } from './cmps/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderModule,
    MsBooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
