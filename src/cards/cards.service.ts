import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCardDto } from './dto/create-card.dto';
import { Card, CardDocument } from './schemas/card.schema';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

  async create(
    createCardDto: CreateCardDto,
    creatorId: string,
  ): Promise<CardDocument> {
    const card = new this.cardModel({
      ...createCardDto,
      creatorId,
    });
    return card.save();
  }

  async findAll(): Promise<CardDocument[]> {
    return this.cardModel.find({ isActive: true }).exec();
  }

  async findOne(id: string): Promise<CardDocument | null> {
    return this.cardModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCardDto: Partial<CreateCardDto>,
  ): Promise<CardDocument | null> {
    return this.cardModel
      .findByIdAndUpdate(id, updateCardDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<CardDocument | null> {
    return this.cardModel
      .findByIdAndUpdate(id, { isActive: false }, { new: true })
      .exec();
  }

  async findByCreator(creatorId: string): Promise<CardDocument[]> {
    return this.cardModel.find({ creatorId, isActive: true }).exec();
  }
}
