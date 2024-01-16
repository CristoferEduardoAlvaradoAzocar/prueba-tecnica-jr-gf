import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/compoment/login/login.component';
import { ProtectedPageComponent } from './modules/protected-page/compoment/protected-page/protected-page.component';
import { loginGuard } from './core/guards/login.guards';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:ProtectedPageComponent, canActivate:[loginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
