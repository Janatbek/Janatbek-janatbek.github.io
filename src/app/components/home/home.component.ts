import { Component } from '@angular/core';
import { Banner } from 'src/app/models/banner.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  banner: Banner;
  constructor() {
    this.banner = new Banner(
      'ca-pub-4402260762998050',
      8896926206,
      'auto',
      true
    )
  }
}
