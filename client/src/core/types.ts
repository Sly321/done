import { Prisma, Task } from './prisma-generated'

export interface Context {
    prisma: Prisma
}

export type TaskResponse = Task
