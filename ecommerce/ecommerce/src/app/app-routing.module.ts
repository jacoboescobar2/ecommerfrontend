import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { NoUsuarioLoginGuard } from './guards/no-usuario-login.guard';
import { UsuarioLoginGuard } from './guards/usuario-login.guard';
import { GestionarUsuariosComponent } from './components/gestionar-usuarios/gestionar-usuarios.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';


const routes: Routes = [
  { path: "login", component: LoginComponent,  canActivate: [NoUsuarioLoginGuard]},
  { path: "create-user", component: CreateUserComponent,  canActivate: [NoUsuarioLoginGuard]},
  { path: "change-password", component: ChangePasswordComponent,  canActivate: [NoUsuarioLoginGuard]},
  { path: "home", component: HomeComponent,   canActivate: [UsuarioLoginGuard]},
  { path: "gestionar-usuario", component: GestionarUsuariosComponent, canActivate: [UsuarioLoginGuard]},
  { path: "crear-producto", component: CreateProductComponent, canActivate: [UsuarioLoginGuard]},
  { path: "editar-usuario/:id", component: EditarUsuarioComponent, canActivate: [UsuarioLoginGuard]},
  { path: "editar-producto/:id", component: ProductsComponent, canActivate: [UsuarioLoginGuard]},
  { path: "**", pathMatch: 'full' , redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
