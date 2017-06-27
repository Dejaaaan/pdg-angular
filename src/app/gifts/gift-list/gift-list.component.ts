import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Gift} from "../gift";
import {GiftService} from "../gift.service";
import {Event} from "../../events/event";

@Component({
  selector: 'pdg-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {
  gifts: Gift[] = [];

  @Input() selectedEvent: Event;
  @Output() giftSelected = new EventEmitter<Gift>();

  constructor(private giftService: GiftService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.gifts = this.giftService.getGifts(this.selectedEvent.id);
  }

  onSelected(gift: Gift) {
    this.giftSelected.emit(gift);
  }
}
