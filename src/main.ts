import type { EmailContact, EmailInbox, EmailMessage } from './email'
import './style.css'

console.log('Pošta')

const contact : EmailContact = {
  name: 'Pepa',
  email: 'pepa@example.com'
}

const message : EmailMessage = {
  id: '1',
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

const inbox : EmailInbox[] = [
  {
    title: 'Osobní',
    owner: contact,
    messages: [message]
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
console.log(message)
console.log(inbox)
