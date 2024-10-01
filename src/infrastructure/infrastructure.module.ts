import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repositoty';

@Module({
  imports: [],
  providers: [UserRepository],
})
export class InfrastructureModule {}
