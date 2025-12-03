import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collection, CollectionDocument } from './schemas/collection.schema';
import { CreateCollectionDto } from './dto/create-collection.dto';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectModel(Collection.name) private collectionModel: Model<CollectionDocument>,
  ) {}

  async create(createCollectionDto: CreateCollectionDto, userId: string): Promise<CollectionDocument> {
    const collection = new this.collectionModel({
      ...createCollectionDto,
      userId,
    });
    return collection.save();
  }

  async findAllByUser(userId: string): Promise<CollectionDocument[]> {
    return this.collectionModel.find({ userId, isActive: true }).exec();
  }

  async findOne(id: string): Promise<CollectionDocument | null> {
    return this.collectionModel.findById(id).exec();
  }

  async update(id: string, updateCollectionDto: Partial<CreateCollectionDto>): Promise<CollectionDocument | null> {
    return this.collectionModel.findByIdAndUpdate(id, updateCollectionDto, { new: true }).exec();
  }

  async remove(id: string): Promise<CollectionDocument | null> {
    return this.collectionModel.findByIdAndUpdate(id, { isActive: false }, { new: true }).exec();
  }

  async addCardToCollection(collectionId: string, cardId: string): Promise<CollectionDocument | null> {
    return this.collectionModel.findByIdAndUpdate(
      collectionId,
      { $addToSet: { cardIds: cardId } },
      { new: true },
    ).exec();
  }

  async removeCardFromCollection(collectionId: string, cardId: string): Promise<CollectionDocument | null> {
    return this.collectionModel.findByIdAndUpdate(
      collectionId,
      { $pull: { cardIds: cardId } },
      { new: true },
    ).exec();
  }
}