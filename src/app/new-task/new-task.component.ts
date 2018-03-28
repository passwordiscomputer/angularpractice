import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Output() clickedDone = new EventEmitter();

  addButtonClicked(description: string, priority: string) {
    let newTask: Task = new Task(description, parseInt(priority));
    this.clickedDone.emit(newTask);
  }
  constructor() { }

  ngOnInit() {
  }

}
