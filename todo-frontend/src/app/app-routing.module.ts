import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { LoginRouteGuardService } from './service/login-route-guard.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginRouteGuardService] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: 'oauth2/redirect', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
