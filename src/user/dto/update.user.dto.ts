import { IsNotEmpty, IsOptional, IsEmail, MinLength } from "class-validator";
import { EmailUnique } from "../emailUnique.validator";

export class UpdateUserDTO {
    @IsNotEmpty({ message: 'Name cannot be empty' })
    @IsOptional()
    name: string;

    @IsEmail(undefined, { message: 'Email invalid' })
    @EmailUnique({ message: 'Email already used' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'Password must has 6 caracthers' })
    @IsOptional()
    password: string;
}