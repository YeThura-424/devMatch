/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class ProfileCreateDTO {
  @IsString({ message: 'Name must be a string.' })
  @Length(3, 20, { message: 'Name must be between 3 and 20 characters long.' })
  name!: string;

  @IsNumber({}, { message: 'Age must be a number.' })
  @Min(0, { message: 'Age must be a non-negative number.' })
  @Max(120, { message: 'Age must be less than or equal to 120.' })
  age!: number;

  @IsString({ message: 'Location must be a string.' })
  location!: string;
}
