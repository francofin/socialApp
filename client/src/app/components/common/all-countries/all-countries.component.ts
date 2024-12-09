import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-all-countries',
    templateUrl: './all-countries.component.html',
    styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent {

    constructor(
        public router: Router
    ) { }

}