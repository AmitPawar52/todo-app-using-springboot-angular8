import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }
  deleteTodo(username: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  retriveTodo(username: string, id: number) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
