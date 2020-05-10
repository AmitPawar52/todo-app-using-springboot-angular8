import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  username: string
  todo: Todo;
  constructor(private todoService: TodoDataService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: BasicAuthenticationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.username = this.authService.getAuthenticatedUser();
    
    this.todo = new Todo(this.id, "", false, new Date());
    
    if (this.id != -1) {
      this.todoService.retriveTodo(this.username, this.id).subscribe(
        data => this.todo = data
      );
    }
  }
  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo(this.username, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
      this.todoService.updateTodo(this.username, this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }

}
