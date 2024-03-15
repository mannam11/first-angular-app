import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  message : any={};

  @Input()
  index : number=-1;

  @Output()
  delete : EventEmitter<number> = new EventEmitter<number>();

  onClickRemove() : void{
    this.delete.emit(this.index);
  }

}
