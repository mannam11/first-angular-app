import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init() : void{
    this.insert({
       name:'Manohar Mannam',
       email:'manoharmannam@gmail.com',
       description:'description-1'
    });
    this.insert({
      name:'Manohar',
      email:'manoharmannam930@gmail.com',
      description:'description-2'
    });
    this.insert({
      name:'Mannam',
      email:'manoharmannam2000@gmail.com',
      description:'description-3'
    });
    this.insert({
      name:'Mano',
      email:'manoharmannam000@gmail.com',
      description:'description-4'
    });
  }

  insert(message: {name : string,email : string,description : string }) : void{
    this.messages.push(message);
  }

  getAllMessages() : any[]{
    return this.messages;
  }

  deleteMessages(index : number) : void{
    this.messages.splice(index,1);
  }
}
