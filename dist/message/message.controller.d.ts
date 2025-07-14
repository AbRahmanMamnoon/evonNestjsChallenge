import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageController {
    private messageService;
    constructor(messageService: MessageService);
    create(createMessageDto: CreateMessageDto, req: any): import("./entities/message.entity").Message;
    findAll(req: any, type?: string): import("./entities/message.entity").Message[];
    markAsRead(id: string, req: any): import("./entities/message.entity").Message;
}
