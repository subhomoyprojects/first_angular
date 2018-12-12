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

  constructor() { }

  ngOnInit() {
  }
  // For Multy Select
  toppings = new FormControl();
  toppingList: string[] = ['Vat 69', 'Royal Stag', 'King Fisher', 'Black Dog'];
  // For Multy Select

}
