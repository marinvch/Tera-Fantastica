import { MagazinesService } from "./magazines/magazines.service";
import { BooksService } from "./books/books.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { BooksComponent } from "./books/books.component";
import { MagazinesComponent } from "./magazines/magazines.component";
import { NewspaperComponent } from "./newspaper/newspaper.component";

//importing Swiper Module for angular from https://swiperjs.com/angular/
import { SwiperModule } from 'swiper/angular';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BooksComponent,
    MagazinesComponent,
    NewspaperComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    SwiperModule,
    FontAwesomeModule,
  ],
  providers: [BooksService, MagazinesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
