import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AnyARecord } from 'dns';
import { Model } from 'mongoose';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private userModel: Model<any>) {}
  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findById(id: number): Promise<User> {
    return this.userModel.findById(id);
  }
}
