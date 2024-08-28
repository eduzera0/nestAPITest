import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListUserDTO } from "./dto/list.user.dto";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm/repository/Repository"; 
import { UpdateUserDTO } from "./dto/update.user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async listUsers() {
        const savedUsers = await this.userRepository.find();
        const userList = savedUsers.map(
            (user) => new ListUserDTO(user.id, user.name)
        );

        return userList;
    }

    async createUser(user: UserEntity) {
        await this.userRepository.save(user);
    }

    async updateUser(id: string, newData: UpdateUserDTO) {
        await this.userRepository.update(id, newData);
    }

    async deleteUser(id: string) {
        await this.userRepository.delete(id);
    }
}