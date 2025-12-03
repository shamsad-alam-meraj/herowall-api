import { IsNotEmpty, IsOptional, IsString, IsNumber, IsArray, IsObject } from 'class-validator';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  imageUrl!: string;

  @IsString()
  @IsOptional()
  rarity?: string;

  @IsNumber()
  @IsOptional()
  power?: number;

  @IsArray()
  @IsOptional()
  abilities?: string[];

  @IsObject()
  @IsOptional()
  metadata?: Record<string, any>;
}