import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    private users: UserEntity[] = [];

    private findById(id: string) {
        const possibleUser = this.users.find(
            savedUser => savedUser.id === id
        );

        if (!possibleUser) {
            throw new Error('User not found');
        }

        return possibleUser;
    }

    async saveUser(user: UserEntity) {
        this.users.push(user);
        console.log(this.users);
    }

    async showUsers() {
        return this.users;
    }

    async emailUnique(email: string) {
        const possibleUser = this.users.find(
            user => user.email === email
        );
        return possibleUser !== undefined;
    }

    async updateUser(id: string, updatedData: Partial<UserEntity>) {
        const user = this.findById(id);

        Object.entries(updatedData).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }

            user[key] = value;
        });

        return user;
    }

    async deleteUser(id: string) {
        const user = this.findById(id);
        this.users.filter(
            savedUser => savedUser.id !== id
        )

        return user;
    }
}