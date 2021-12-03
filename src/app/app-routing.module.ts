import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './features/login/pages/page-login/page-login.component';
import { DetailsMemberComponent } from './features/member/pages/details-member/details-member.component';
import { PageMemberComponent } from './features/member/pages/page-member/page-member.component';
import { RegisterMemberComponent } from './features/member/pages/register-member/register-member.component';
import { PageRegisterComponent } from './features/register/page-register/page-register.component';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login', component: PageLoginComponent},
  { path: 'members', component: PageMemberComponent, canActivate: [AuthGuardGuard] },
  { path: 'register', component: RegisterMemberComponent , canActivate: [AuthGuardGuard] },
  { path: 'member-details/:id', component: DetailsMemberComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
