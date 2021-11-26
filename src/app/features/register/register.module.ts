import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRegisterComponent } from './page-register/page-register.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PageRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RegisterModule { }
