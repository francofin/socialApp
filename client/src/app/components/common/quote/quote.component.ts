import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

    constructor(
        public router: Router
    ) { }

}