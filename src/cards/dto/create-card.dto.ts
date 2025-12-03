import { IsNotEmpty, IsOptional, IsString, IsNumber, IsArray, IsObject } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCardDto {
  @ApiProperty({ description: 'Card name', example: 'Super Hero Card' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiPropertyOptional({ description: 'Card description', example: 'A powerful superhero card' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Card image URL', example: 'https://example.com/card-image.jpg' })
  @IsString()
  @IsNotEmpty()
  imageUrl!: string;

  @ApiPropertyOptional({ description: 'Card rarity', example: 'legendary', enum: ['common', 'rare', 'epic', 'legendary'] })
  @IsString()
  @IsOptional()
  rarity?: string;

  @ApiPropertyOptional({ description: 'Card power level', example: 100 })
  @IsNumber()
  @IsOptional()
  power?: number;

  @ApiPropertyOptional({ description: 'Card abilities', example: ['Flight', 'Super Strength'] })
  @IsArray()
  @IsOptional()
  abilities?: string[];

  @ApiPropertyOptional({ description: 'Additional metadata', example: { level: 1, experience: 0 } })
  @IsObject()
  @IsOptional()
  metadata?: Record<string, any>;
}