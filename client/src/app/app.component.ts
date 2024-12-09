import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit{
    
    location: any;
    routerSubscription: any;
    // http = inject(HttpClient);
    // users:any;

    constructor(
        public router: Router
    ) {}



    ngOnInit(){
        this.recallJsFuntions();
        // this.http.get('https://localhost:5001/api/users').subscribe({
        //     next:(response) => {this.users = response},
        //     error: (error) => {console.error(error)},
        //     complete: () => {console.log(this.users)}
        // })
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    

}