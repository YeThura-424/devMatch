import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProfileCreateDTO } from './dto/create-profile.dto';
import { ProfileUpdateDTO } from './dto/update-profile.dto';

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
  @Put(':id')
  update(@Body() updateProfileDTO: ProfileUpdateDTO, @Param('id') id: string) {
    return {
      id,
      name: updateProfileDTO.name,
      age: updateProfileDTO.age,
      location: updateProfileDTO.location,
    };
  }
}
