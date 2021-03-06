import { MagazinesService } from "./magazines.service";
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
} from "ngx-swiper-wrapper";
import { ViewChild, OnInit, Component, HostListener } from "@angular/core";

@Component({
  selector: "app-magazines",
  templateUrl: "magazines.component.html",
  styleUrls: ["magazines.component.css"],
})
export class MagazinesComponent implements OnInit {
  public innerWidth: any;
  public innerHeigth: any;
  public Slides = [];
  public config: SwiperConfigInterface = {
    a11y: false,
    observer: true,
    centeredSlides: true,
    direction: "horizontal",
    mousewheel: true,
    keyboard: true,
    spaceBetween: 10,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: -42,
      depth: 90,
      modifier: 2,
      slideShadows: false,
    },

  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  @HostListener("window:resize", ["$event"])

  onResize(event) {
    let width = event.target.innerWidth;
    let heigth = event.target.innerHeight;

    if (heigth > width ) {
      this.config.direction = "vertical";
      this.config.slidesPerView = 1;
    } else if (heigth < width ) {
      this.config.direction = "horizontal";
      this.config.slidesPerView = 5;
    }
    console.log(this.config.direction);
    }

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

  public onIndexChange(index: number): void {
    const element = document.querySelector(".activeSlide");
    if (this.Slides[index].link !== "") {
      element.innerHTML = `
        <ul>
        <li>${this.Slides[index].text.name}</li>
        <li>Автор: ${this.Slides[index].text.author}</li>
        <li>Година: ${this.Slides[index].text.Year}</li>
        <li>Формат: ${this.Slides[index].text.Format}</li>
        <li>Страници: ${this.Slides[index].text.Pages}</li>
        <li><span class="material-icons">
        <a href="${this.Slides[index].link}" target="blank">picture_as_pdf</a>
        </span>
        </li>
        </ul>`;
    } else {
      element.innerHTML = `
        <ul>
        <li>${this.Slides[index].text.name}</li>
        <li>Автор: ${this.Slides[index].text.author}</li>
        <li>Година: ${this.Slides[index].text.Year}</li>
        <li>Формат: ${this.Slides[index].text.Format}</li>
        <li>Страници: ${this.Slides[index].text.Pages}</li>
        </ul>`;
    }
    // tslint:disable-next-line: variable-name

    console.log("Swiper index: ", index);
  }

  public onSwiperEvent(event: string): void {
    console.log("Swiper event: ", event);
  }

  ngOnInit() {
    this._MagazinesService.getData().subscribe((data) => (this.Slides = data));

    this.innerWidth = window.innerWidth;
    this.innerHeigth =  window.innerHeight;

    if (this.innerHeigth > this.innerWidth ) {
      this.config.direction = "vertical";
      this.config.slidesPerView = 1;
    } else if (this.innerHeigth < this.innerWidth) {
      this.config.direction = "horizontal";
      this.config.slidesPerView = 5;
    }
  }
}
