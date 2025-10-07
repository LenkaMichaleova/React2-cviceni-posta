export interface EmailContact {
    name: string;
    email: string;
}

export interface EmailMessage {
    id: string;
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
