//TYPY PROMĚNNÝCH PRO POŠTU
export interface EmailContact {
    name: string;
    email: string;
}

export interface EmailMessage {
    id: number;
    from: EmailContact;
    to: EmailContact[];
    cc?: EmailContact[];
    bcc?: EmailContact[];
    subject: string;
    body: string;
    attachments?: EmailAttachment[];
    priority?: 'low' | 'normal' | 'high';
    sentAt: Date;
    isRead: boolean;
}

export interface EmailInbox {
    title: string;
    owner: EmailContact;
    messages: string[] | EmailMessage[];
}[]

export type EmailInbox2 = EmailMessage[];


export interface EmailAttachment {
    filename: string;
    size: number; // in bytes
    contentType:
        'image/gif'| 
        'image/jpeg'| 
        'image/png'|
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' | // DOCX
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'; // XLSX
}


// TYPY FUNKCÍ PRO POŠTU

export function getUnread (inbox: EmailInbox2) : EmailMessage[] {
    return (
        inbox.filter(msg => msg.isRead === false)
    );
}

export function markAsRead (inbox: EmailInbox2, messageId: number) : EmailInbox2 {
    return(
        inbox.map((msg) => msg.id === messageId ? { ...msg, isRead: true } : msg )
    )
}
