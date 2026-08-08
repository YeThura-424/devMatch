import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ProfileCreateDTO } from './dto/create-profile.dto';
import { ProfileUpdateDTO } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'John',
      age: 25,
      location: 'Dubai',
    },
    {
      id: randomUUID(),
      name: 'Sarah',
      age: 28,
      location: 'Abu Dhabi',
    },
    {
      id: randomUUID(),
      name: 'Michael',
      age: 32,
      location: 'Sharjah',
    },
    {
      id: randomUUID(),
      name: 'Emma',
      age: 24,
      location: 'Dubai',
    },
    {
      id: randomUUID(),
      name: 'David',
      age: 30,
      location: 'Ajman',
    },
    {
      id: randomUUID(),
      name: 'Sophia',
      age: 27,
      location: 'Dubai',
    },
    {
      id: randomUUID(),
      name: 'Daniel',
      age: 35,
      location: 'Abu Dhabi',
    },
    {
      id: randomUUID(),
      name: 'Olivia',
      age: 23,
      location: 'Sharjah',
    },
    {
      id: randomUUID(),
      name: 'James',
      age: 29,
      location: 'Dubai',
    },
    {
      id: randomUUID(),
      name: 'Mia',
      age: 26,
      location: 'Ras Al Khaimah',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((item) => item.id === id);
  }

  create(createProfileData: ProfileCreateDTO) {
    return this.profiles.push({
      id: randomUUID(),
      ...createProfileData,
    });
  }

  update(id: string, updateProfileData: ProfileUpdateDTO) {
    const profile = this.profiles.find((profile) => profile.id === id);

    if (profile) {
      if (updateProfileData.age !== undefined)
        profile.age = updateProfileData.age;
      if (updateProfileData.location !== undefined)
        profile.location = updateProfileData.location;
      if (updateProfileData.name !== undefined)
        profile.name = updateProfileData.name;

      return profile;
    }

    return null;
  }

  remove(id: string) {
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (profileIndex !== -1) {
      this.profiles.splice(profileIndex, 1);
    }

    return {};
  }
}
