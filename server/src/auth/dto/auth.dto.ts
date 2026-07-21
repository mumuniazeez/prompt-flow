import { User } from '../../../generated/prisma';

export class UserPayloadData implements Partial<User> {
  id!: string;
  email!: string;
}

export class GoogleAuthPayloadDto {
  token!: string;
  user!: UserPayloadData;
}
