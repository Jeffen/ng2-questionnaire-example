import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrl: string;

  constructor() { }

  ngOnInit() {
    this.imageUrl = './assets/img/home/banner_01.jpg';
  }

}
