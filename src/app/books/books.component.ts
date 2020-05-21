import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';
import { ViewChild, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.css'],
})
export class BooksComponent implements OnInit {
  public show = true;

  public Slides = [{
    url: '../assets/books/img1.jpg',
    text: {
      name: 'Домът на Велзевул',
      author: 'Т. Р. Пейков',
      Year: 2002,
      Format: '60×84/16',
      Pages: 208,
    },
    id: 1,
    link: '',
  }, {
    url: '../assets/books/img2.jpg',
    text: {
      name: 'Хакери на човешките души',
      author: 'Иван Попов',
      Year: 2004,
      Format: '56×84/16',
      Pages: 192,
    },
    id: 2,
    link: '../assets/books/pdf/Ivan_Popov_-_Hakeri_na_choveshkite_dushi.pdf',
  }, {
    url: '../assets/books/img3.jpg',
    text: {
      name: 'Операция „Риба“',
      author: 'Гай Афраний Кота',
      Year: 2006,
      Format: '130×200 мм',
      Pages: 336,
    },
    id: 3,
    link: '../assets/books/pdf/Petyr_Kopanov_-_Operatsija_Riba.pdf',
  }, {
    url: '../assets/books/img4.jpg',
    text: {
      name: 'Орфеус слиза в Ада',
      author: 'Георги Малинов',
      Year: 2007,
      Format: '130×200 мм',
      Pages: 244,
    },
    id: 4,
    link: '',
  }, {
    url: '../assets/books/img5.jpg',
    text: {
      name: 'Те не вярват в приказки',
      author: 'Мартин Петков',
      Year: 2008,
      Format: '130×200 мм',
      Pages: 288,
    },
    id: 5,
    link: '',
  }, {
    url: '../assets/books/img6.jpg',
    text: {
      name: 'Домът на Велзевул',
      author: 'Тервел Пейков',
      Year: 2008,
      Format: '130×200 мм',
      Pages: 224,
    },
    id: 6,
    link: '',
  }, {
    url: '../assets/books/img7.jpg',
    text: {
      name: 'С името на Иван Ефремов',
      author: 'Александър Карапанчев, Юрий Илков',
      Year: 2009,
      Format: '56/84/16',
      Pages: 284,
    },
    id: 7,
    link: '',
  },
  ];

  public type = 'component';

  public disabled = false;

  public config: SwiperConfigInterface = {
    a11y: false,
    observer: true,
    centeredSlides: true,
    direction: 'horizontal',
    mousewheel: true,
    keyboard: true,
    slidesPerView: 5,
    loop: true,
    effect: 'coverflow',
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

  constructor() {
    const searchBtn = document.getElementById('search');
    searchBtn.style.display = 'block';

    const removeImg = document.getElementById('imgContainer');
    removeImg.style.display = 'none';
  }

  public toggleType(): void {
    this.type = this.type === 'component' ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleDirection(): void {
    this.config.direction =
      this.config.direction === 'horizontal' ? 'vertical' : 'horizontal';
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

    if (this.Slides[index].link !== '') {
      // tslint:disable-next-line: no-shadowed-variable
      const element = document.querySelector('.activeSlide');
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
      const element = document.querySelector('.activeSlide');
      element.innerHTML = `
        <br>
        <p>${this.Slides[index].text.name}</p>
        <p>Автор: ${this.Slides[index].text.author}</p>
        <p>Година: ${this.Slides[index].text.Year}</p>
        <p>Формат: ${this.Slides[index].text.Format}</p>
        <p>Страници: ${this.Slides[index].text.Pages}</p>`;
    }
    // tslint:disable-next-line: variable-name

    console.log('Swiper index: ', index);
  }


  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  public reportWindowSize(event: { target: { innerHeight: any; innerWidth: any; }; }): void {
    const heigth = event.target.innerHeight;
    const width = event.target.innerWidth;

    if (heigth > width && this.config.direction !== 'vertical') {
      this.config.direction = 'vertical';
      if (this.config.direction === 'vertical') {
        this.config.slidesPerView = 3;
      }
    }
    if (heigth < width && this.config.direction !== 'horizontal') {
      this.config.direction = 'horizontal';
      if (this.config.direction === 'horizontal') {
        this.config.slidesPerView = 5;
      }
    }
  }

  public removeBtns(): void {
    const leftBtn = document.querySelector('.swiper-button-prev');

    leftBtn?.remove();

    const rigthBtn = document.querySelector('.swiper-button-next');
    rigthBtn?.remove();
  }

  ngOnInit(): void {

  }
}
