import {uuid}  from "./uuid";

export class User {
  id: string;

  constructor( public email:string,
               public name?: string,
               public surname?:string,
               public password?:string ) {
    this.id = uuid();
  }
}

export class MailBox {
  id: string;
  lastMessage: Message;
 

  constructor(id?: string,
              public name?: string,
              public surname?:string,
              public avatarSrc?: string) {
    this.id = id || uuid();
   
  }
}

export class Message {
  id: string;
  sentAt: Date;
  isRead: boolean;
  author: User;
  text: string;
  mailbox: MailBox;

  constructor(obj?: any) {
    this.id              = obj && obj.id              || uuid();
    this.isRead          = obj && obj.isRead          || false;
    this.sentAt          = obj && obj.sentAt          || new Date();
    this.author          = obj && obj.author          || null;
    this.text            = obj && obj.text            || null;
    this.mailbox         = obj && obj.thread          || null;
  }
}
