import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomsLists } from '../rooms';

@Component({
  selector: 'app-room-lists',
  templateUrl: './room-lists.component.html',
  styleUrls: ['./room-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomsLists[] = [];
  @Input() title: string = ""
  @Output() selectRoom = new EventEmitter<RoomsLists>();

  selectedRoom(room: RoomsLists){
    this.selectRoom.emit(room)
  }
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

ngOnDestroy() {
  console.log("Ondestroy is called")
}

}
