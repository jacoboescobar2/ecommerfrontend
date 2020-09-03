import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { NoUsuarioLoginGuard } from './guards/no-usuario-login.guard';
import { UsuarioLoginGuard } from './guards/usuario-login.guard';


const routes: Routes = [
  { path: "login", component: LoginComponent,  canActivate: [NoUsuarioLoginGuard]},
  { path: "create-user", component: CreateUserComponent,  canActivate: [NoUsuarioLoginGuard]},
  { path: "change-password", component: ChangePasswordComponent,  canActivate: [NoUsuarioLoginGuard]},
  { path: "home", component: HomeComponent,   canActivate: [UsuarioLoginGuard]},
  { path: "**", pathMatch: 'full' , redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
