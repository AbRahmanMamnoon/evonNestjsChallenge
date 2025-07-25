"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    users = [
        {
            id: '1',
            email: 'john@example.com',
            name: 'John Doe',
        },
        {
            id: '2',
            email: 'jane@example.com',
            name: 'Jane Smith',
        },
        {
            id: '3',
            email: 'admin@example.com',
            name: 'Admin User',
        },
    ];
    findById(id) {
        return this.users.find((user) => user.id === id);
    }
    findByEmail(email) {
        return this.users.find((user) => user.email === email);
    }
    getAllUsers() {
        return this.users;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map