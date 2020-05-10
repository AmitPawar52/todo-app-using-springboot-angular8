import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL, JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`)
  }
  deleteTodo(username: string, id: number) {
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`)
  }
  retriveTodo(username: string, id: number) {
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`)
  }
  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`, todo)
  }
  createTodo(username: string, todo: Todo) {
    return this.http.post(`${JPA_API_URL}/users/${username}/todos`, todo)
  }
}
