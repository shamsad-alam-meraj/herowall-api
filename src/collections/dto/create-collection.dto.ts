import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCollectionDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  cardIds?: string[];

  @IsArray()
  @IsOptional()
  wishlistCardIds?: string[];

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}
