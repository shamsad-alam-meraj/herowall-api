import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto, @Request() req: any) {
    return this.collectionsService.create(createCollectionDto, req.user._id.toString());
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: any) {
    return this.collectionsService.findAllByUser(req.user._id.toString());
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCollectionDto: Partial<CreateCollectionDto>) {
    return this.collectionsService.update(id, updateCollectionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionsService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/add-card/:cardId')
  addCard(@Param('id') id: string, @Param('cardId') cardId: string) {
    return this.collectionsService.addCardToCollection(id, cardId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/remove-card/:cardId')
  removeCard(@Param('id') id: string, @Param('cardId') cardId: string) {
    return this.collectionsService.removeCardFromCollection(id, cardId);
  }
}