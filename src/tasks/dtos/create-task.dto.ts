import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'El título de la tarea es obligatorio' })
  title: string;

  @IsBoolean({ message: 'El estado completado debe ser un booleano' })
  completed: boolean;
}