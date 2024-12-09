import { Component, inject, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-ht-banner',
  templateUrl: './ht-banner.component.html',
  styleUrls: ['./ht-banner.component.scss']
})
export class HtBannerComponent implements OnInit{
  // @NgModule({
  //   imports: [NgFor],
  //   exports: [NgFor]
  // })

  http = inject(HttpClient);
  users:any;

  ngOnInit(){
    this.http.get('https://localhost:5001/api/users').subscribe({
        next:(response) => {this.users = response},
        error: (error) => {console.error(error)},
        complete: () => {console.log(this.users)}
    })
}



}
