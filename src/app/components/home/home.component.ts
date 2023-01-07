import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Banner } from 'src/app/models/banner.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  banner: Banner;
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Home page of Janatbek Orozaly portfolio app' },
      { name: 'author', content: 'Janatbek @ TechDevApps' },
      { name: 'keywords', content: 'Angular in github page, Angular 15, Bootstrap, Software Engineer' },
    ]);
    this.banner = new Banner('ca-pub-4402260762998050', 8896926206, 'auto', true);
  }

  setTitle(): void {
    this.title.setTitle('Janatbek Orozaly');
  }
}
