import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ImageCarouselComponent } from "./image-carousel/image-carousel.component";
import { CardsComponent } from "./cards/cards.component";
import { SearchComponent } from "./search/search.component";
import { EndOfPageComponent } from "./end-of-page/end-of-page.component";
import { ColorfulFooterComponent } from "./colorful-footer/colorful-footer.component";
import { VideoBackgroundComponent } from "./video-background/video-background.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, ImageCarouselComponent, CardsComponent, SearchComponent, EndOfPageComponent, ColorfulFooterComponent, VideoBackgroundComponent, AboutUsComponent],
  template: `
    
    <div class='home_page_needs_background'>
        <div class="header">
          <img class="logo-image" src="assets/einnel-logo.png">
          <button class = "menu-button" mat-fab extended
           (click)="scrollTo('services')">
            <mat-icon>shopping_cart</mat-icon>
             Products
          <!-- <mat-menu #products_menu="matMenu">
            <button mat-menu-item>MDOX</button>
            <button mat-menu-item>4C</button>
            <button mat-menu-item>Safe Drive</button>
            <button mat-menu-item>Task</button>
            <button mat-menu-item>ERP</button>
            <button mat-menu-item>EDOM</button>
            <button mat-menu-item>Ecclesia</button>
          </mat-menu> -->
          </button>
          <button class = "menu-button" mat-fab extended (click)="scrollTo('products')"> <mat-icon>business</mat-icon>Services</button>
          <!-- <mat-menu #services_menu="matMenu">
            <button mat-menu-item>Data Driven CAE</button>
            <button mat-menu-item>Digital Twin</button>
            <button mat-menu-item>Cloud Digital</button>
            <button mat-menu-item>Data Science</button>
          </mat-menu> -->
          <button class = "menu-button" mat-fab extended (click)="scrollTo('about-us')"> <mat-icon>home</mat-icon>About Us</button>
          <!-- <mat-menu #about_us_menu="matMenu">
            <button mat-menu-item>Mission</button>
            <button mat-menu-item>Directors</button>
          </mat-menu> -->
          <app-search></app-search>
        </div>
        <app-video-background></app-video-background>
      <div class = "text_needs_background">
        <body style="color: gray;">
          <div class="future-is-now">
            <div class="the">The</div>
            <div class="future">Future is</div>
            <div class="Now">Now.</div>
          <div class="robot_picture">
              <img src="assets/robot-1.svg" alt="cool pic of robot">
          </div>
          </div>
        </body>
      </div>
      <div id="services">
        <div class="products_header">
          <p style="color: gray;">Our Products</p>
        </div>
        <app-cards></app-cards>
      </div>
      <div id="products">
        <div class="products_header">
          <p style="color: gray;">Our Services</p>
        </div>
        <app-image-carousel></app-image-carousel>
      </div>
      <div id="about-us">
        <app-about-us></app-about-us>
      </div>
      <div class="background-image-cards-and-EoP">
        <br>
        <app-end-of-page style="color: whitesmoke;"></app-end-of-page>
      </div>
    </div>
    <app-colorful-footer></app-colorful-footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private elementRef: ElementRef) { }
  scrollTo(sectionId: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
    