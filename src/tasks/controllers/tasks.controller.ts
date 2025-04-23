/**
 * Controller responsible for handling HTTP requests related to tasks.
 * Provides endpoints for CRUD operations on tasks.
 */
import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus, HttpCode, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  /**
   * Creates a new task
   * @param createTaskDto - The data transfer object containing task creation details
   * @returns The newly created task
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body(ValidationPipe) createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  /**
   * Retrieves all tasks
   * @returns An array of all tasks
   */
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  /**
   * Retrieves a specific task by ID
   * @param id - The unique identifier of the task
   * @returns The task with the specified ID
   * @throws NotFoundException if the task is not found
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  /**
   * Updates an existing task
   * @param id - The unique identifier of the task to update
   * @param updateTaskDto - The data transfer object containing task update details
   * @returns The updated task
   * @throws NotFoundException if the task is not found
   */
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  /**
   * Removes a task by ID
   * @param id - The unique identifier of the task to remove
   * @throws NotFoundException if the task is not found
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    this.tasksService.remove(id);
  }
}