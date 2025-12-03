import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCollectionDto {
  @ApiProperty({ description: 'Collection name', example: 'My Superhero Collection' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiPropertyOptional({ description: 'Collection description', example: 'A collection of powerful superhero cards' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ description: 'Array of card IDs in the collection', example: ['card1', 'card2'] })
  @IsArray()
  @IsOptional()
  cardIds?: string[];

  @ApiPropertyOptional({ description: 'Array of card IDs in the wishlist', example: ['card3', 'card4'] })
  @IsArray()
  @IsOptional()
  wishlistCardIds?: string[];

  @ApiPropertyOptional({ description: 'Whether the collection is public', example: false })
  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}
