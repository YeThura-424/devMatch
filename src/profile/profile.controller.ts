import { Controller, Get, Query } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  // normal get for all profile .
  // testing with Query
  @Get()
  findAll(@Query('age') age: number, @Query('location') location: string) {
    return [{ age, location }];
  }
}
