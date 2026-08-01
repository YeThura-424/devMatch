import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProfileCreateDTO } from './dto/create-profile.dto';

@Controller('profile')
export class ProfileController {
  // normal get for all profile .
  // testing with Query
  @Get()
  findAll(@Query('age') age: number, @Query('location') location: string) {
    return [{ age, location }];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() createProfileDTO: ProfileCreateDTO) {
    return {
      name: createProfileDTO.name,
      age: createProfileDTO.age,
      location: createProfileDTO.location,
    };
  }
}
