/**
 * Entity representing a Task in the system.
 * Contains the core properties that define a task.
 */
export class Task {
    /**
     * Unique identifier for the task
     * @example 1
     */
    id: number;

    /**
     * The title or description of the task
     * @example "Complete project documentation"
     */
    title: string;

    /**
     * Indicates whether the task has been completed
     * @example false
     */
    completed: boolean;

    /**
     * Timestamp when the task was created
     * @example "2024-03-14T12:00:00Z"
     */
    createdAt: Date;
}