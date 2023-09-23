import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemaphoreComponent } from './semaphore/semaphore.component';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'calc', component: CalcComponent, canActivate: [AuthGuard] },
  { path: 'semaphore', component: SemaphoreComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
