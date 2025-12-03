import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CollectionDocument = Collection & Document;

@Schema({ timestamps: true })
export class Collection {
  @Prop({ required: true })
  userId!: string;

  @Prop({ required: true })
  name!: string;

  @Prop()
  description?: string;

  @Prop({ type: [String], default: [] })
  cardIds!: string[];

  @Prop({ type: [String], default: [] })
  wishlistCardIds!: string[];

  @Prop({ default: false })
  isPublic!: boolean;

  @Prop({ default: true })
  isActive!: boolean;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);