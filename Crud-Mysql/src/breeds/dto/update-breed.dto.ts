import { IsString, MinLength } from "class-validator";

export class UpdateBreedDto {
  @IsString()
  @MinLength(5)
  name: string;
}
