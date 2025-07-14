export interface Message {
    id: string;
    senderEmail: string;
    recipientEmail: string;
    content: string;
    createdAt: Date;
    isRead: boolean;
}
