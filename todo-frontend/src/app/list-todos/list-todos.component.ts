import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  deleteSuccessMessage: string;
  // todos = [
  //   new Todo(1, 'Learn Spring', false, new Date()),
  //   new Todo(2, 'Learn to dance', false, new Date()),
  //   new Todo(3, 'become expert in Angular', false, new Date())
  // ]

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retriveAllTodos('user').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('user', id).subscribe(
      response => {
        console.log(response)
        this.deleteSuccessMessage = `deletion of id: ${id} is successful`
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id])
  }
}
