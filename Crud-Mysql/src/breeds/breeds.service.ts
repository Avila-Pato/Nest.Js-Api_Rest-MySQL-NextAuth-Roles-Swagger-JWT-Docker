import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBreedDto } from './dto/create-breed.dto';
import { Breed } from './entities/breed.entity';
import { UpdateBreedDto } from './dto/update-breed.dto';


@Injectable()
export class BreedsService {
 
  constructor(
    @InjectRepository(Breed)
    private readonly breedsRepository: Repository<Breed>,
  ) {}
  
  

   create(createBreedDto: CreateBreedDto) {
    const breed = this.breedsRepository.create(createBreedDto);
    return  this.breedsRepository.save(breed);
  }

  async findAll() {
    return await this.breedsRepository.find();
  }

  findOne(id: number) {
    throw new Error(`Method not implemented. ${id}`);
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    return `this action update ${id} `
  }
  async remove(id: number) {
    return `this action remove the ${id}`
  }

}