import { Component, OnInit } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  name:string='';
  email:string='';
  description:string='';
  isSubmitted:boolean =false;
  messages:Array<any>=[];

  constructor(private messageService:MyFirstService) { 
    this.messages = this.messageService.getAllMessages();
    this.isSubmitted=this.messages.length>0;
  }

  ngOnInit(): void {
  }

  onSubmit() : void{
    this.isSubmitted=true;
    this.messageService.insert({
      'name' : this.name,
      'email' : this.email,
      'description' : this.description
    });
    console.log(this.messages);
  }

  deleteEntry(index:number){
    this.messageService.deleteMessages(index);
  }

}
