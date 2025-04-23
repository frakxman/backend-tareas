/**
 * Data Transfer Object for creating a new task.
 * Contains validation rules for task creation.
 */
import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  /**
   * The title of the task
   * @example "Complete project documentation"
   */
  @IsNotEmpty({ message: 'Task title is required' })
  title: string;

  /**
   * The completion status of the task
   * @example false
   */
  @IsBoolean({ message: 'Completed status must be a boolean value' })
  completed: boolean;
}