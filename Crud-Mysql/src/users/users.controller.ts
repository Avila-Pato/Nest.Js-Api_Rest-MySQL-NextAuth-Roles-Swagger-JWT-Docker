import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, ConflictException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    if(isNaN(Number(id))){
      throw new NotFoundException('ID no valido')
    }
    const userUpdate =  await this.usersService.findOne(id)
    if(!userUpdate){
      throw new  NotFoundException('Tarea no encontrada')
    }
    try {
      const updatedTask = await this.usersService.update(id, body);
      if (!updatedTask) {
          throw new ConflictException('No se puede actualizar la tarea debido a un conflicto'); // 409 Conflict
      }
      return updatedTask;
  } catch (error) {
      throw error; // Re-lanzar el error si ocurre otro
  }

    
  }
  @Delete(':id')
 async remove(@Param('id') id: string) {
  if(isNaN(Number(id))){
    throw new NotFoundException('ID no valido')
  }
  const userDelete =  await this.usersService.findOne(id)
  if(!userDelete){
    throw new  NotFoundException('Tarea no encontrada')
  }
  try {
    const result = await this.usersService.delete(id);
    if (!result) {
        throw new ConflictException('No se puede eliminar la tarea debido a un conflicto'); // 409 Conflict
    }
    return result;
} catch (error) {
    throw error; // Re-lanzar el error si ocurre otro
}
    
  }
}
