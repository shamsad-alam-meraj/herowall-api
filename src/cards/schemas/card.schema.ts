import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CardDocument = Card & Document;

@Schema({ timestamps: true })
export class Card {
  @Prop({ required: true })
  name!: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  imageUrl!: string;

  @Prop({ default: 'common' })
  rarity!: string; // common, rare, epic, legendary

  @Prop({ default: 1 })
  power!: number;

  @Prop()
  abilities?: string[];

  @Prop({ required: true })
  creatorId!: string; // User ID

  @Prop({ default: true })
  isActive!: boolean;

  @Prop({ type: Object })
  metadata?: Record<string, any>; // For image processing data
}

export const CardSchema = SchemaFactory.createForClass(Card);
