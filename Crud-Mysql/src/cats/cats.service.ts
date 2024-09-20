import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
    @InjectRepository(Breed)
    private readonly breedsRepository: Repository<Breed>,
  ) {}

 async create(createCatDto: CreateCatDto) {
   const breed = await this.breedsRepository.findOneBy({name: createCatDto.breed});
    if(!breed){
      throw new BadRequestException('Breed no found')
    }
    return await this.catsRepository.save({
      ...createCatDto,
      breed
    })
  }

  findAll() {
    return this.catsRepository.find();
  }

  findOne(id: number) {
    return this.catsRepository.findOneBy({ id });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return await this.catsRepository.update(id, updateCatDto);
  }

  remove(id: number) {
    // softdelete colcoa una fecha de eliminacion
    return this.catsRepository.softDelete({id});
    

  }
}
