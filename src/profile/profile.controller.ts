import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProfileCreateDTO } from './dto/create-profile.dto';
import { ProfileUpdateDTO } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';

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
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
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

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(@Param('id') id: string) {}
}
