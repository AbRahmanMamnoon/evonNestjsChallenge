import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getProfile(req: any): {
        id: any;
        email: any;
        name: any;
    };
}
