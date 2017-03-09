import {User, MailBox, Message} from './models';
// import {MessagesService, ThreadsService,
//         UserService} from './services/services';

 //import * as moment from 'moment';

let me: User      = new User('Juliet@mail.ru','Julia','Lux');
let ladycap: User = new User('Lady_Capulet@mail.ru', 'Lady','Capulet');
let echo: User    = new User('Echo_Bot@mail.ru', 'Echo', 'Bot');
let rev: User     = new User('Reverse_Bot@mail.ru', 'Reverse', 'Bot');
let wait: User    = new User('Waiting_Bot@mail.ru', 'Waiting', 'Bot');

let tLadycap: MailBox = new MailBox('tLadycap', ladycap.name);
let tEcho: MailBox   = new MailBox('tEcho', echo.name);
let tRev: MailBox     = new MailBox('tRev', rev.name);
let tWait: MailBox   = new MailBox('tWait', wait.name);

export let initialMessages: Array<Message> = [
  new Message({
    author: me,
    sentAt: new Date(1493092800010),// moment().subtract(45, 'minutes').toDate(),
    text: 'Yet let me weep for such a feeling loss.',
    thread: tLadycap
  }),
  new Message({
    author: ladycap,
    sentAt: new Date(1493092800003),//moment().subtract(20, 'minutes').toDate(),
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    thread: tLadycap
  }),
  new Message({
    author: echo,
    sentAt: new Date(1493092800007),//moment().subtract(1, 'minutes').toDate(),
    text: `I\'ll echo whatever you send me`,
    thread: tEcho
  }),
  new Message({
    author: rev,
    sentAt:new Date(1493092800002),// moment().subtract(3, 'minutes').toDate(),
    text: `I\'ll reverse whatever you send me`,
    thread: tRev
  }),
  new Message({
    author: wait,
    sentAt: new Date(1493092800006), //moment().subtract(4, 'minutes').toDate(),
    text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
    thread: tWait
  }),
];