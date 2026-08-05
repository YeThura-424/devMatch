import { PartialType } from '@nestjs/mapped-types';
import { ProfileCreateDTO } from './create-profile.dto';

export class ProfileUpdateDTO extends PartialType(ProfileCreateDTO) {}
