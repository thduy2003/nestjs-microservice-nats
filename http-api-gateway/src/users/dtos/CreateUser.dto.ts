import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  username: string;
  @IsOptional()
  @IsString()
  displayName?: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
