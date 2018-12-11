import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmoreinformation',
  templateUrl: './addmoreinformation.component.html',
  styleUrls: ['./addmoreinformation.component.css']
})
export class AddmoreinformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  isCollapsed = false; // Social Media Updown

  // For Owl Carousal

 owl1: any = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  margin:10,
  navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    }
  },
  nav: true
}

owl2: any = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  autoWidth:true,
  margin:10,
  navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 4
    }
  },
  nav: true
}

}
