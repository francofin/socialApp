import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-subscription-comparison',
    templateUrl: './subscription-comparison.component.html',
    styleUrls: ['./subscription-comparison.component.scss']
})
export class SubscriptionComparisonComponent {

    constructor(
        public router: Router
    ) { }

}