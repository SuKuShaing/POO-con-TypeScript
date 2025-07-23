/*
* A diferencia de TypeScript, los decoradores no van a decir los errores de forma inmediata.
* Dan feedback hasta el runtime.
* Agregan validaciones y comportamientos extra.
*/


import { IsEnum, IsNotEmpty, IsUrl, Length, validateOrReject } from 'class-validator';
import { AccessType, Category } from "../models/category";


export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
    @IsNotEmpty()
    @Length(4, 140)
    name!: string;

    @IsUrl()
    @IsNotEmpty()
    image!: string;
    
    @IsNotEmpty()
    @IsEnum(AccessType)
    access?: AccessType | undefined;

    slug!: string;
    creationAt!: Date;
    updatedAt!: Date;
}

(
    async () => {
        try {
            const dto = new CreateCategoryDto();
            dto.name = 'New category';
            dto.image = 'https://api.escuelajs.co/api/v1/categories';
            await validateOrReject(dto);
        } catch (error) {
            console.log(error);
        }
    }
)();