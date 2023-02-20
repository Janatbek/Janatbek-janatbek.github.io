import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { environment } from 'environment/environment.prod';
import { Banner } from './banner.model';
declare const window: any;
@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements AfterViewInit {
    @Input() banner!: Banner;
    showAd = environment.adsense.show;
    constructor() {}

    ngAfterViewInit() {
        setTimeout(() => {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({
                    overlays: { bottom: true },
                });
            } catch (e) {
                console.error(e);
            }
        }, 0);
    }
}
