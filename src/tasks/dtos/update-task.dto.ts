/**
 * Data Transfer Object for updating an existing task.
 * Extends CreateTaskDto making all properties optional using PartialType.
 * This allows for partial updates of task properties.
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}