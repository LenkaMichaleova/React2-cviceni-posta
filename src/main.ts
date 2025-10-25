import { 
  getUnread, 
  markAsRead,
  type EmailContact, 
  type EmailInbox, 
  type EmailInbox2, 
  type EmailMessage
} from './email'
import './style.css'

console.log('Pošta')

const contact : EmailContact = {
  name: 'Pepa',
  email: 'pepa@example.com'
}

const message1 : EmailMessage = {
  id: 1,
  from: contact,
  to: [{
    name: 'Alena',
    email: 'alena@example.com'
  }],
  cc: [{
    name: 'Pepa',
    email: 'pepa@example.com'
  }],
  bcc: [{
  name: 'Karel',
  email: 'karel@example.com'
  }],
  subject: 'Ahoj',
  body: 'Jak se máš?',
  priority: 'normal',
  attachments: [],
  sentAt: new Date(),
  isRead: false
}

const message2 : EmailMessage = {
  id: 2,
  from: contact,
  to: [{
    name: 'Zdena',
    email: 'zdena@example.com'
  }],
  cc: [{
    name: 'Pepa',
    email: 'pepa@example.com'
  }],
  bcc: [{
  name: 'Karel',
  email: 'karel@example.com'
  }],
  subject: 'Ahoj',
  body: 'Jak se máš?',
  priority: 'normal',
  attachments: [],
  sentAt: new Date(),
  isRead: true
}

const inbox : EmailInbox[] = [
  {
    title: 'Osobní',
    owner: contact,
    messages: [message1, message2]
  },
  {
    title: 'Práce',
    owner: {
      name: 'Alena',
      email: 'alena@example.com'
    },
    messages: [
      'dneska ti to sluší', 
      'máš u mě kafe', 
      'díky za pomoc'
    ]
  },
  {
    title: 'Spam',
    owner: {
      name: 'Karel',
      email: 'karel@example.com'
    },
    messages: [
      'vyhrál jsi milion korun', 
      'klikni sem a vyhraj další milion', 
      'gratuluji, právě jsi vyhrál 10 milionů'
    ]
  } 
]

console.log(contact)
console.log(message1, message2)
console.log(inbox)

const inbox2 : EmailInbox2 = [message1, message2];
console.log('puvodni schranka: ', inbox2)

const notReadMessages = getUnread(inbox2)
console.log('nepřečtené zprávy: ', notReadMessages)

const updatedInbox = markAsRead(inbox2, 1);
console.log('změna první zprávy na přečteno: ', updatedInbox);
