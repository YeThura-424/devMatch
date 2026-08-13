import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProfileCreateDTO } from './dto/create-profile.dto';
import { ProfileUpdateDTO } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';
import type { UUID } from 'crypto';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  // normal get for all profile .
  // testing with Query
  // @Get()
  // findAll(@Query('age') age: number, @Query('location') location: string) {
  //   return [{ age, location }];
  // }

  @Get()
  findAll(@Query('name') name: string, @Query('location') location: string) {
    return this.profileService.findAll(name, location);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profileService.findOne(id);
  }

  @Post()
  create(@Body() createProfileDTO: ProfileCreateDTO) {
    return this.profileService.create(createProfileDTO);
  }
  @Put(':id')
  update(
    @Body() updateProfileDTO: ProfileUpdateDTO,
    @Param('id', ParseUUIDPipe) id: UUID,
  ) {
    return this.profileService.update(id, updateProfileDTO);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profileService.remove(id);
  }
}
