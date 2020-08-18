import { Component, OnInit } from '@angular/core';
import { TimelineMax, Back } from 'gsap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  items = [];

  constructor() {
    this.items = ['Bananas', 'Apple', 'Milk'];
  }

  ngOnInit() {}

  pushItem() {
    this.items.push('Eggs');
  }

  removeItem() {
    this.items.pop();
  }
}
