import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserTaks } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor
    (@InjectModel(UserTaks.name) private userTaks: Model<UserTaks>) { }

  findAll() {
    return this.userTaks.find();
  }
  async create(createTask: CreateUserDto) {
    const newTask = new this.userTaks(createTask);
    return newTask.save();
  }
  async findOne(id: string) {
    return this.userTaks.findById(id);
  }
  async delete(id: string) {
    return this.userTaks.findByIdAndDelete(id);
  }
  async update(id: string, task: UpdateUserDto) {
    return this.userTaks.findByIdAndUpdate(id, task, { new: true });
  }
}

