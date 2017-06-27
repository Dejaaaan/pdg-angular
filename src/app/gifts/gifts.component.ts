import {Component, OnInit} from '@angular/core';
import {Gift} from "./gift";

@Component({
  selector: 'pdg-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
  selectedGift: Gift

  constructor() { }

  ngOnInit() {
  }

}
