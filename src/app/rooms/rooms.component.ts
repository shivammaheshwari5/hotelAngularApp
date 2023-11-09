import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Rooms, RoomsLists } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'Four leaf';
  numberofrooms = 10;
  constructor(private roomsService: RoomsService) {}
  roomtitle = "Room View!"

  hiderooms = false;
  rooms: Rooms = {
    totalrooms: 20,
    availablerooms: 5,
    bookedrooms: 15,
  };
  title = "Room List"
  roomsLists: RoomsLists[] = [];
  toggle() {
    this.hiderooms = !this.hiderooms;
    this.title = this.title === "Room List" ? "Rooms List" : "Room List"
  }
  selectRoom!: RoomsLists;
  @ViewChild(HeaderComponent) headerComponent!:HeaderComponent;
  ngOnInit(): void {
     this.roomsLists = this.roomsService.getData()
    console.log(this.headerComponent)
    
  }
  ngAfterViewInit(){
  this.headerComponent.title = "Pool Of Rooms"
  }
  selectedRoom(room: RoomsLists) {
    this.selectRoom = room;
  }

  addRoom() {
    const firstRoom: RoomsLists = {
      roomType: 'Vip rooms',
      amenities: 'Ac rooms, gym, swimming pool',
      price: 10000,
      checkin: new Date('01/03/2002'),
      checkout: new Date('07/06/2014'),
    };
    this.roomsLists = [...this.roomsLists, firstRoom]
  }
}
