import { Component } from '@angular/core';
import { Banner } from './banner/banner.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    banner: Banner;
    /**
     * Constructor
     */
    constructor() {
        this.banner = new Banner(
            'ca-pub-4402260762998050',
            8896926206,
            'auto',
            true
        );
    }
}
