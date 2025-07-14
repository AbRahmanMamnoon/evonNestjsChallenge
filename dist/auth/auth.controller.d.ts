import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: import("./auth.service").User;
    }>;
    refresh(req: any): Promise<{
        access_token: string;
        user: import("./auth.service").User;
    }>;
    validate(req: any): Promise<{
        valid: boolean;
        user: any;
    }>;
}
