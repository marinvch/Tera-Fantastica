import { MagazinesService } from "./magazines.service";
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
} from "ngx-swiper-wrapper";
import { ViewChild, OnInit, Component } from "@angular/core";

@Component({
  selector: "app-magazines",
  templateUrl: "magazines.component.html",
  styleUrls: ["magazines.component.css"],
})
export class MagazinesComponent implements OnInit {
  public show = true;

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

  public slides = [];

  constructor(private _MagazinesService: MagazinesService) {
    const element = (document.querySelectorAll(
      "mat-toolbar"
    )[1] as unknown) as HTMLElement;
    element.style.display = "block";

    const searchBtn = document.getElementById("search");
    searchBtn.style.display = "block";

    const removeImg = document.getElementById("imgContainer");
    removeImg.style.display = "none";
  }

  public toggleDirection(): void {
    this.config.direction =
      this.config.direction === "horizontal" ? "vertical" : "horizontal";
  }

  public toggleslidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 5;
    } else {
      this.config.slidesPerView = 3;
    }
  }

  public toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number): void {
    if (this.slides[index].link !== "") {
      // tslint:disable-next-line: no-shadowed-variable
      const element = document.querySelector(".activeSlide");
      element.innerHTML = `
        <br>
        <p>${this.slides[index].text.name}</p>
        <p>Автор: ${this.slides[index].text.author}</p>
        <p>Година: ${this.slides[index].text.Year}</p>
        <p>Формат: ${this.slides[index].text.Format}</p>
        <p>Страници: ${this.slides[index].text.Pages}</p>
        <span class="material-icons">
        <a href="${this.slides[index].link}" target="blank">picture_as_pdf</a>
        </span>`;
    } else {
      // tslint:disable-next-line: no-shadowed-variable
      const element = document.querySelector(".activeSlide");
      element.innerHTML = `
        <br>
        <p>${this.slides[index].text.name}</p>
        <p>Автор: ${this.slides[index].text.author}</p>
        <p>Година: ${this.slides[index].text.Year}</p>
        <p>Формат: ${this.slides[index].text.Format}</p>
        <p>Страници: ${this.slides[index].text.Pages}</p>`;
    }
    // tslint:disable-next-line: variable-name

    console.log("Swiper index: ", index);
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
    this.slides = this._MagazinesService.getData();
  }
}
