import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailUnique } from "../emailUnique.validator";

export class CreateUserDTO {

    @IsNotEmpty({ message: "Name cannot be empty"})
    name: string;

    @IsEmail(undefined, {message: "Invalid email address"})
    @EmailUnique({ message: "Email already exists"})
    email: string;

    @MinLength(6, { message: "Password must be at least 6 characters"})
    password: string;
}