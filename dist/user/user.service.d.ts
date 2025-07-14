import { User } from '../auth/auth.service';
export declare class UserService {
    private readonly users;
    findById(id: string): User | undefined;
    findByEmail(email: string): User | undefined;
    getAllUsers(): User[];
}
