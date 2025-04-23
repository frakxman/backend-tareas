// tasks/tasks.service.ts
/**
 * Service responsible for managing task operations.
 * Handles the business logic for creating, reading, updating, and deleting tasks.
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
  /**
   * In-memory storage for tasks
   * @private
   */
  private tasks: Task[] = [];

  /**
   * Counter for generating unique task IDs
   * @private
   */
  private idCounter = 1;

  /**
   * Creates a new task with the provided data
   * @param createTaskDto - Data transfer object containing task details
   * @returns The newly created task
   */
  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: this.idCounter++,
      ...createTaskDto,
      createdAt: new Date(),
    };
    this.tasks.push(task);
    return task;
  }

  /**
   * Retrieves all tasks from storage
   * @returns Array of all tasks
   */
  findAll(): Task[] {
    return this.tasks;
  }

  /**
   * Finds a specific task by its ID
   * @param id - The unique identifier of the task
   * @returns The found task
   * @throws NotFoundException if the task doesn't exist
   */
  findOne(id: number): Task {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  /**
   * Updates an existing task with new data
   * @param id - The unique identifier of the task to update
   * @param updateTaskDto - Data transfer object containing update details
   * @returns The updated task
   * @throws NotFoundException if the task doesn't exist
   */
  update(id: number, updateTaskDto: UpdateTaskDto): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    
    const updatedTask = {
      ...this.tasks[taskIndex],
      ...updateTaskDto,
    };
    
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  /**
   * Removes a task from storage
   * @param id - The unique identifier of the task to remove
   * @throws NotFoundException if the task doesn't exist
   */
  remove(id: number): void {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    this.tasks.splice(taskIndex, 1);
  }
}