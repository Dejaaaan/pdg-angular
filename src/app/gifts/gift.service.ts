import { Injectable } from '@angular/core';
import {Gift} from "./gift";

@Injectable()
export class GiftService {
  private gifts: Gift[] = [
    new Gift(1,1,'Dummy', 'Crash Dummy',
      'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png',
    1, 100, 'Dummy Store','wwww.dummy-store.com',0,new Date().toDateString(),new Date().toDateString()),
    new Gift(2,1,'Summer Salad',
      'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',
    1, 50, 'Restoran','www.some-resotran.com',1,new Date().toDateString(),new Date().toDateString())
  ];

  constructor() { }

  getGifts(eventId: number) {
    return this.gifts.filter(gift => gift.event_id == eventId);
  }

}
