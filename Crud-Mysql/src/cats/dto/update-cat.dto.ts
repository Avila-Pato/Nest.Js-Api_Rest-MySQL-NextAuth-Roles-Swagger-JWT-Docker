import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { Breed } from "src/breeds/entities/breed.entity";

export class UpdateCatDto {
  @IsString()
  name: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  @IsOptional()
  breed: Breed;
}
