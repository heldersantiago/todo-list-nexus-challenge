import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from 'src/application/services/user.service';
import { User } from 'src/domain/entities/user.entity';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get(':id')
  async getUser(@Param() id: number): Promise<User> {
    return this.userService.getUserById(id);
  }
}
