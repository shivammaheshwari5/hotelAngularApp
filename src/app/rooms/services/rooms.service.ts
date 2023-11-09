import { Injectable } from '@angular/core';
import { RoomsLists } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomsLists: RoomsLists[] = [
    {
      roomType: 'Private rooms',
      amenities: 'Ac rooms, gym, swimming pool',
      price: 12000,
      checkin: new Date('12/03/2002'),
      checkout: new Date('12/06/2003'),
    },
    {
      roomType: 'Luxary rooms',
      amenities: 'Ac rooms, gym, swimming pool',
      price: 10000,
      checkin: new Date('12/03/2002'),
      checkout: new Date('04/06/2014'),
    },
    {
      roomType: 'Private rooms',
      amenities: 'Ac rooms, gym, swimming pool',
      price: 5000,
      checkin: new Date('12/03/2002'),
      checkout: new Date('07/06/2014'),
    },
  ];

 getData(){
  return this.roomsLists
 }
}
