import TaskModel from './TaskModel'
import { TaskResponse } from './types'

export default class TaskConverter {
    public static responseToModel({
        createdAt,
        id,
        important,
        subject,
        updatedAt,
        completed,
    }: TaskResponse): TaskModel {
        return new TaskModel(id, new Date(createdAt), new Date(updatedAt), subject, important, completed)
    }
}
