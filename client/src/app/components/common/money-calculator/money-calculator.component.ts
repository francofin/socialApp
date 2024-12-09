import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-money-calculator',
    templateUrl: './money-calculator.component.html',
    styleUrls: ['./money-calculator.component.scss']
})
export class MoneyCalculatorComponent {

    constructor(
        public router: Router
    ) { }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

}