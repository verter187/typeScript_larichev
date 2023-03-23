class Task {
  constructor(public priority: number) {}
}
class TaskList {
  private tasks: Task[] = [];

  public sortByPriority() {
    this.tasks = this.tasks.sort((a, b) => {
      if (a.priority > b.priority) {
        return 1;
      } else if ((a.priority = b.priority)) {
        return 0;
      } else {
        return -1;
      }
    });
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
  }
  public getTask() {
    return this.tasks;
  }
  public count(): number {
    return this.tasks.length;
  }

  public getIterator() {
    return new PriorityTaskIterator(this);
  }
}

interface IIterator<T> {
  current(): T | undefined;
  next(): T | undefined;
  prev(): T | undefined;
  index(): number;
}

class PriorityTaskIterator implements IIterator<Task> {
  private position: number = 0;
  private tasksList: TaskList;

  constructor(tasksList: TaskList) {
    tasksList.sortByPriority();
    this.tasksList = tasksList;
  }

  current(): Task | undefined {
    return this.tasksList.getTask()[this.position];
  }

  next(): Task | undefined {
    this.position += 1;
    return this.tasksList.getTask()[this.position];
  }
  prev(): Task | undefined {
    this.position -= 1;
    return this.tasksList.getTask()[this.position];
  }
  index(): number {
    return this.position;
  }
}

const taskList = new TaskList();
taskList.addTask(new Task(8));
taskList.addTask(new Task(1));
taskList.addTask(new Task(3));

const iterator = taskList.getIterator();
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.index());
