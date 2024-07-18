import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';
import { freeSet } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor,
     CarouselItemComponent, CarouselCaptionComponent, CarouselControlComponent, RouterLink, IconDirective],
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarouselComponent implements OnInit {
  icons = freeSet;
  slides: any[] = new Array(4).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/slideshow-data-analytics.jpg',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/slideshow-datadriven-CAE.jpg',
    };
    this.slides[2] = {
      id: 2,
      src: './assets/slideshow-digital-twin.jpg',
    };
    this.slides[3] = {
      id: 3,
      src: './assets/slideshow-mobi-apps.jpg',
    };
 }

 onItemChange($event: any): void {
  console.log('Carousel onItemChange', $event);
}
}
