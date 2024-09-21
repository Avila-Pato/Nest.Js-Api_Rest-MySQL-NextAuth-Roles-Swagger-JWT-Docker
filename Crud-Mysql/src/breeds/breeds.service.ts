import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { CreateBreedDto } from './dto/create-breed.dto';
// import { Breed } from './entities/breed.entity';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BreedsTaks } from './schema/breeds.schema';
import { Model } from 'mongoose';


@Injectable()
export class BreedsService {
    constructor
      (@InjectModel(BreedsTaks.name) private breedsTaks: Model<BreedsTaks>) { }
  
    findAll() {
      return this.breedsTaks.find();
    }
    async create(createTask: CreateBreedDto) {
      const newTask = new this.breedsTaks(createTask);
      return newTask.save();
    }
    async findOne(id: string) {
      return this.breedsTaks.findById(id);
    }
    async delete(id: string) {
      return this.breedsTaks.findByIdAndDelete(id);
    }
    remove(id: string) {
      return this.breedsTaks.findByIdAndDelete(id);
    }    
    async update(id: string, task: UpdateBreedDto) {
      return this.breedsTaks.findByIdAndUpdate(id, task, { new: true });
    }
  }
