import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";
import { ListUserDTO } from "./dto/list.user.dto";
import { UpdateUserDTO } from "./dto/update.user.dto";
import { UserService } from "./user.service";

@Controller('/users')
export class UserController {

    constructor(
        private userRepository: UserRepository,
        private userService: UserService,
        ) {}

    @Get()
    async getUsers() {
        const savedUsers = await this.userService.listUsers();
        return savedUsers;
    }

    @Post()
    async createUser(@Body() userData: CreateUserDTO) {
        const userEntity = new UserEntity();
        userEntity.email = userData.email;
        userEntity.password = userData.password;
        userEntity.name = userData.name;
        userEntity.id = uuid();

        await this.userService.createUser(userEntity);

        return {
            user: new ListUserDTO(userEntity.id, userEntity.email),
            message:  'User created'
        };
    }

    @Put('/:id')
    async updateUser(
        @Param('id') id: string,
        @Body() newData: UpdateUserDTO) {
        const updatedUser = await this.userService.updateUser(id, newData);

        return {
            user: updatedUser,
            message: 'User updated'
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        const deletedUser = await this.userService.deleteUser(id);

        return {
            user: deletedUser,
            message: 'User deleted'
        }
    }
}