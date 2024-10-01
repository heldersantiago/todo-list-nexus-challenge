import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user.repositoty';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findById(id);
  }
}
