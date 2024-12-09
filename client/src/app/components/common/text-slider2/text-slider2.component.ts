import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-text-slider2',
    templateUrl: './text-slider2.component.html',
    styleUrls: ['./text-slider2.component.scss']
})
export class TextSlider2Component {

    textSliderSlides: OwlOptions = {
		nav: false,
		margin: 35,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 0,
        autoplaySpeed: 3000,
		autoplayHoverPause: true,
        slideTransition: 'linear',
        responsive: {
            0: {
                margin: 15,
                items: 1
            },
            576: {
                margin: 15,
                items: 1
            },
            768: {
                margin: 25,
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 3
            },
            1700: {
                items: 4
            }
        }
    }

}