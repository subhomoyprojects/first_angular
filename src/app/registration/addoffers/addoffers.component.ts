import { Component, OnInit } from '@angular/core';
// Multy Select Form 

import {FormControl} from '@angular/forms';

// Multy Select Form

@Component({
  selector: 'app-addoffers',
  templateUrl: './addoffers.component.html',
  styleUrls: ['./addoffers.component.css']
})
export class AddoffersComponent implements OnInit {
  // For Multy Select
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  // For Multy Select
  constructor() { }

  ngOnInit() {
  }

}
