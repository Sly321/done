export default class TaskModel {
    constructor(public id: string, public createdAt: Date, public updatedAt: Date, public subject: string, public important: boolean) {}
}
