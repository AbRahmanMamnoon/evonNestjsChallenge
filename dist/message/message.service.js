"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
let MessageService = class MessageService {
    messages = [
        {
            id: '1',
            senderEmail: 'john@example.com',
            recipientEmail: 'jane@example.com',
            content: 'Hello Jane! How are you doing?',
            createdAt: new Date('2024-01-15T10:00:00Z'),
            isRead: false,
        },
        {
            id: '2',
            senderEmail: 'jane@example.com',
            recipientEmail: 'john@example.com',
            content: 'Hi John! I am doing great, thanks for asking!',
            createdAt: new Date('2024-01-15T10:30:00Z'),
            isRead: true,
        },
        {
            id: '3',
            senderEmail: 'admin@example.com',
            recipientEmail: 'john@example.com',
            content: 'Welcome to the platform!',
            createdAt: new Date('2024-01-14T09:00:00Z'),
            isRead: true,
        },
    ];
    create(createMessageDto, senderEmail) {
        const message = {
            id: (this.messages.length + 1).toString(),
            senderEmail,
            recipientEmail: createMessageDto.recipientEmail,
            content: createMessageDto.content,
            createdAt: new Date(),
            isRead: false,
        };
        this.messages.push(message);
        return message;
    }
    findAll() {
        return this.messages.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    findByUser(userEmail) {
        return this.messages
            .filter((message) => message.senderEmail === userEmail ||
            message.recipientEmail === userEmail)
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    findSentByUser(userEmail) {
        return this.messages
            .filter((message) => message.senderEmail === userEmail)
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    findReceivedByUser(userEmail) {
        return this.messages
            .filter((message) => message.recipientEmail === userEmail)
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    markAsRead(messageId, userEmail) {
        const message = this.messages.find((m) => m.id === messageId);
        if (!message) {
            throw new common_1.NotFoundException('Message not found');
        }
        if (message.recipientEmail !== userEmail) {
            throw new common_1.NotFoundException('Message not found');
        }
        message.isRead = true;
        return message;
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)()
], MessageService);
//# sourceMappingURL=message.service.js.map