import { BooksService } from "./../books.service";
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
} from "ngx-swiper-wrapper";
import { ViewChild, OnInit, Component } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "books.component.html",
  styleUrls: ["books.component.css"],
})
export class BooksComponent implements OnInit {
  public show = true;

  public Slides = [];

  public disabled = false;

  public config: SwiperConfigInterface = {
    a11y: false,
    observer: true,
    centeredSlides: true,
    direction: "horizontal",
    mousewheel: true,
    keyboard: true,
    slidesPerView: 5,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: -50,
      depth: 90,
      modifier: 2,
      slideShadows: false,
    },
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  usefulSwiper: any;

  constructor(private _BooksService: BooksService) {
    const searchBtn = document.getElementById("search");
    searchBtn.style.display = "block";

    const removeImg = document.getElementById("imgContainer");
    removeImg.style.display = "none";
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleDirection(): void {
    this.config.direction =
      this.config.direction === "horizontal" ? "vertical" : "horizontal";
  }

  public toggleSlidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number): void {
    if (this.Slides[index].link !== "") {
      // tslint:disable-next-line: no-shadowed-variable
      const element = document.querySelector(".activeSlide");
      element.innerHTML = `
        <br>
        <p>${this.Slides[index].text.name}</p>
        <p>Автор: ${this.Slides[index].text.author}</p>
        <p>Година: ${this.Slides[index].text.Year}</p>
        <p>Формат: ${this.Slides[index].text.Format}</p>
        <p>Страници: ${this.Slides[index].text.Pages}</p>
        <span class="material-icons">
        <a href="${this.Slides[index].link}" target="blank">picture_as_pdf</a>
        </span>`;
    } else {
      // tslint:disable-next-line: no-shadowed-variable
      const element = document.querySelector(".activeSlide");
      element.innerHTML = `
        <br>
        <p>${this.Slides[index].text.name}</p>
        <p>Автор: ${this.Slides[index].text.author}</p>
        <p>Година: ${this.Slides[index].text.Year}</p>
        <p>Формат: ${this.Slides[index].text.Format}</p>
        <p>Страници: ${this.Slides[index].text.Pages}</p>`;
    }
  }

  public onSwiperEvent(event: string): void {
    console.log("Swiper event: ", event);
  }

  public reportWindowSize(event: {
    target: { innerHeight: any; innerWidth: any };
  }): void {
    const heigth = event.target.innerHeight;
    const width = event.target.innerWidth;

    if (heigth > width && this.config.direction !== "vertical") {
      this.config.direction = "vertical";
      if (this.config.direction === "vertical") {
        this.config.slidesPerView = 3;
      }
    }
    if (heigth < width && this.config.direction !== "horizontal") {
      this.config.direction = "horizontal";
      if (this.config.direction === "horizontal") {
        this.config.slidesPerView = 5;
      }
    }
  }

  public removeBtns(): void {
    const leftBtn = document.querySelector(".swiper-button-prev");

    leftBtn?.remove();

    const rigthBtn = document.querySelector(".swiper-button-next");
    rigthBtn?.remove();
  }

  ngOnInit(): void {
    this.Slides = this._BooksService.getData();
  }
}
