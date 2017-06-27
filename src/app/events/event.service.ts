import {Injectable} from '@angular/core';
import {Event} from './event';
import {Gift} from "../gifts/gift";
import {GiftService} from "../gifts/gift.service";

@Injectable()
export class EventService {

  constructor(private giftService: GiftService) {};

  private events: Event[] = [
    new Event(
      '1',
      '1',
      'Rođendan',
      'Perin rođendan',
      '0',
      'http://plusquotes.com/images/quotes-img/surprise-happy-birthday-gifts-5.jpg',
      '2017-08-10 19:00:00',
      '2017-08-11 03:00:00',
      '2017-08-10 19:00:00',
      'Patrijarha Pavle 20',
      '3',
      '1',
      new Date().toDateString(),
      new Date().toDateString()
    ),
    new Event(
      '2',
      '0',
      'Svadba',
      'Perina svadba',
      '0',
      'http://www.fennes.co.uk/wp-content/uploads/2014/10/fennes_wedding.jpg',
      '2018-03-05 13:00:00',
      '2017-03-06 02:00:00',
      '2017-03-03 13:00:00',
      'Opština',
      '3',
      '1',
      new Date().toDateString(),
      new Date().toDateString()
    )
  ];

  getEvents() {
    return this.events;
  }
}
