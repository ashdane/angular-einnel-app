import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {

}
