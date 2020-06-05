import { MagazinesService } from "./magazines/magazines.service";
import { BooksService } from "./books/books.service";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BooksComponent } from "./books/books.component";
import { MagazinesComponent } from "./magazines/magazines.component";
import { NewspaperComponent } from "./newspaper/newspaper.component";

import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from "ngx-swiper-wrapper";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   observer: true,
//   direction: 'horizontal',
//   threshold: 50,
//   spaceBetween: 5,
//   slidesPerView: 1,
//   centeredSlides: true,
//   loop: true,
// };

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
