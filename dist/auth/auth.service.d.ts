import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
export interface User {
    id: string;
    email: string;
    name: string;
}
export declare class AuthService {
    private jwtService;
    private readonly users;
    constructor(jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: User;
    }>;
    validateUser(userId: string): Promise<User | null>;
    findUserByEmail(email: string): User | undefined;
    refreshToken(email: string): Promise<{
        access_token: string;
        user: User;
    }>;
}
