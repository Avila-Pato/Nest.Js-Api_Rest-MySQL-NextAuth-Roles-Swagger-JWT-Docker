import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BreedsSchema, BreedsTaks } from './schema/breeds.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BreedsTaks.name,
        schema: BreedsSchema,
      },
    ]),
  ],
  controllers: [BreedsController],
  providers: [BreedsService],
  // Elimina TypeOrmModule de exports
  exports: [], // No es necesario exportar nada si no se usa fuera
})
export class BreedsModule {}
