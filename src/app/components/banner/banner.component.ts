import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Banner } from '../../models/banner.model'
import { environment } from 'src/environment/environment.prod';
declare const window: any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit {


  @Input() banner!: Banner;
  showAd = environment.adsense.show;
  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        (window.adsbygoogle = (window.adsbygoogle) || []).push({
          overlays: { bottom: true }
        });
      } catch (e) {
        console.error(e);
      }
    }, 0);
  }

}