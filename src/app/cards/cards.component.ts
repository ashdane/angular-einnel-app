import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {

}
