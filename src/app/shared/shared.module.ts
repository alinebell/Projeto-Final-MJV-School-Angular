import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';




const materialModules =[MatButtonModule];



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    materialModules,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    materialModules
  ]
})
export class SharedModule { }
