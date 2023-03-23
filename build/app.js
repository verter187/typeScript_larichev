"use strict";
class Task {
  constructor(priority) {
    this.priority = priority;
  }
}
class TaskList {
  constructor() {
    this.tasks = [];
  }
  sortByPriority() {
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
  addTask(task) {
    this.tasks.push(task);
  }
  getTask() {
    return this.tasks;
  }
  count() {
    return this.tasks.length;
  }
  getIterator() {
    return new PriorityTaskIterator(this);
  }
}
class PriorityTaskIterator {
  constructor(tasksList) {
    this.position = 0;
    tasksList.sortByPriority();
    this.tasksList = tasksList;
  }
  current() {
    return this.tasksList.getTask()[this.position];
  }
  next() {
    this.position += 1;
    return this.tasksList.getTask()[this.position];
  }
  prev() {
    this.position -= 1;
    return this.tasksList.getTask()[this.position];
  }
  index() {
    return this.position;
  }
}
const taskList = new TaskList();
taskList.addTask(new Task(8));
taskList.addTask(new Task(1));
taskList.addTask(new Task(3));
console.log(taskList);
// const iterator = taskList.getIterator();
// console.log(iterator.current());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.prev());
// console.log(iterator.index());
