import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './features/login/pages/page-login/page-login.component';
import { DetailsMemberComponent } from './features/member/pages/details-member/details-member.component';
import { PageMemberComponent } from './features/member/pages/page-member/page-member.component';
import { PageRegisterComponent } from './features/register/page-register/page-register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/members'},
  { path: 'login', component: PageLoginComponent},
  { path: 'members', component: PageMemberComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'member-details/:id', component: DetailsMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
