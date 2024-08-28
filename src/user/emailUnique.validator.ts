import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "./user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class EmailUniqueValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userWithEmailUsed = await this.userRepository.emailUnique(value);
        return !userWithEmailUsed;
    }

}

export const EmailUnique = (validatorOptions: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validatorOptions,
            constraints: [],
            validator: EmailUniqueValidator,
        })
    }
} 