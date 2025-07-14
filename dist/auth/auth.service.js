"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    jwtService;
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
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const user = this.users.find((u) => u.email === loginDto.email);
        if (!user) {
            const newUser = {
                id: (this.users.length + 1).toString(),
                email: loginDto.email,
                name: loginDto.email.split('@')[0],
            };
            this.users.push(newUser);
            const payload = { email: newUser.email, sub: newUser.id };
            return {
                access_token: this.jwtService.sign(payload),
                user: newUser,
            };
        }
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
    async validateUser(userId) {
        return this.users.find((user) => user.id === userId) || null;
    }
    findUserByEmail(email) {
        return this.users.find((user) => user.email === email);
    }
    async refreshToken(email) {
        const user = this.findUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map