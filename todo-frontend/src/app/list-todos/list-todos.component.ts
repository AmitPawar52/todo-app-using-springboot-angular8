import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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

  username: string
  todos: Todo[]
  deleteSuccessMessage: string;
  // todos = [
  //   new Todo(1, 'Learn Spring', false, new Date()),
  //   new Todo(2, 'Learn to dance', false, new Date()),
  //   new Todo(3, 'become expert in Angular', false, new Date())
  // ]

  constructor(private todoService: TodoDataService, 
              private router: Router,
              private authService: BasicAuthenticationService) { }

  ngOnInit() {
    this.username = this.authService.getAuthenticatedUser();
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retriveAllTodos(this.username).subscribe(
      response => {
        this.todos = response;
      }
    );
  }


  deleteTodo(id: number) {
    this.todoService.deleteTodo(this.username, id).subscribe(
      response => {
        console.log(response)
        this.deleteSuccessMessage = `deletion of id: ${id} is successful`
        this.refreshTodos();
      },
      error => { console.log(error) }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id])
  }
  addTodo() {
    this.router.navigate(['todos', -1])
  }
}
