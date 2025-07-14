import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
export declare class MessageService {
    private messages;
    create(createMessageDto: CreateMessageDto, senderEmail: string): Message;
    findAll(): Message[];
    findByUser(userEmail: string): Message[];
    findSentByUser(userEmail: string): Message[];
    findReceivedByUser(userEmail: string): Message[];
    markAsRead(messageId: string, userEmail: string): Message;
}
