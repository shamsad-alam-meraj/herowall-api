import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Collections')
@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new collection' })
  @ApiResponse({ status: 201, description: 'Collection created successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@Body() createCollectionDto: CreateCollectionDto, @Request() req: any) {
    return this.collectionsService.create(createCollectionDto, req.user._id.toString());
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user\'s collections' })
  @ApiResponse({ status: 200, description: 'Collections retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findAll(@Request() req: any) {
    return this.collectionsService.findAllByUser(req.user._id.toString());
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get collection by ID' })
  @ApiParam({ name: 'id', description: 'Collection ID' })
  @ApiResponse({ status: 200, description: 'Collection retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Collection not found' })
  findOne(@Param('id') id: string) {
    return this.collectionsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update collection' })
  @ApiParam({ name: 'id', description: 'Collection ID' })
  @ApiResponse({ status: 200, description: 'Collection updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  update(@Param('id') id: string, @Body() updateCollectionDto: Partial<CreateCollectionDto>) {
    return this.collectionsService.update(id, updateCollectionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete collection' })
  @ApiParam({ name: 'id', description: 'Collection ID' })
  @ApiResponse({ status: 200, description: 'Collection deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  remove(@Param('id') id: string) {
    return this.collectionsService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/add-card/:cardId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add card to collection' })
  @ApiParam({ name: 'id', description: 'Collection ID' })
  @ApiParam({ name: 'cardId', description: 'Card ID' })
  @ApiResponse({ status: 200, description: 'Card added to collection successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  addCard(@Param('id') id: string, @Param('cardId') cardId: string) {
    return this.collectionsService.addCardToCollection(id, cardId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/remove-card/:cardId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Remove card from collection' })
  @ApiParam({ name: 'id', description: 'Collection ID' })
  @ApiParam({ name: 'cardId', description: 'Card ID' })
  @ApiResponse({ status: 200, description: 'Card removed from collection successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  removeCard(@Param('id') id: string, @Param('cardId') cardId: string) {
    return this.collectionsService.removeCardFromCollection(id, cardId);
  }
}