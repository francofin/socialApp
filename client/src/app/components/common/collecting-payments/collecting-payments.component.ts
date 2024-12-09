import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-collecting-payments',
    templateUrl: './collecting-payments.component.html',
    styleUrls: ['./collecting-payments.component.scss']
})
export class CollectingPaymentsComponent {

    constructor(
        public router: Router
    ) { }

}