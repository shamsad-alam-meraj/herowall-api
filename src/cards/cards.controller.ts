import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new card' })
  @ApiResponse({ status: 201, description: 'Card created successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@Body() createCardDto: CreateCardDto, @Request() req: any) {
    return this.cardsService.create(createCardDto, req.user._id.toString());
  }

  @Get()
  @ApiOperation({ summary: 'Get all cards' })
  @ApiResponse({ status: 200, description: 'Cards retrieved successfully' })
  findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get card by ID' })
  @ApiParam({ name: 'id', description: 'Card ID' })
  @ApiResponse({ status: 200, description: 'Card retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Card not found' })
  findOne(@Param('id') id: string) {
    return this.cardsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update card' })
  @ApiParam({ name: 'id', description: 'Card ID' })
  @ApiResponse({ status: 200, description: 'Card updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  update(@Param('id') id: string, @Body() updateCardDto: Partial<CreateCardDto>) {
    return this.cardsService.update(id, updateCardDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete card' })
  @ApiParam({ name: 'id', description: 'Card ID' })
  @ApiResponse({ status: 200, description: 'Card deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  remove(@Param('id') id: string) {
    return this.cardsService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/my-cards')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user\'s own cards' })
  @ApiResponse({ status: 200, description: 'User cards retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findMyCards(@Request() req: any) {
    return this.cardsService.findByCreator(req.user._id.toString());
  }
}