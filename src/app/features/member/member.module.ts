import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberComponent } from './components/member/member.component';
import { PageMemberComponent } from './pages/page-member/page-member.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsMemberComponent } from './pages/details-member/details-member.component';
import { RegisterMemberComponent } from './pages/register-member/register-member.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MemberListComponent,
    MemberComponent,
    PageMemberComponent,
    DetailsMemberComponent,
    RegisterMemberComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MemberModule { }
