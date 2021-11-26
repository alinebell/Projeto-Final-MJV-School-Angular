import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './Components/member-list/member-list.component';
import { MemberComponent } from './Components/member/member.component';
import { PageMemberComponent } from './pages/page-member/page-member.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsMemberComponent } from './pages/details-member/details-member.component';



@NgModule({
  declarations: [
    MemberListComponent,
    MemberComponent,
    PageMemberComponent,
    DetailsMemberComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MemberModule { }
