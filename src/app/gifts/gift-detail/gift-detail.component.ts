import {Component, OnInit, Input} from '@angular/core';
import {Gift} from "../gift";

@Component({
  selector: 'pdg-gift-detail',
  templateUrl: './gift-detail.component.html',
  styleUrls: ['./gift-detail.component.css']
})
export class GiftDetailComponent implements OnInit {
  @Input() selectedGift: Gift

  constructor() { }

  ngOnInit() {
  }

}
