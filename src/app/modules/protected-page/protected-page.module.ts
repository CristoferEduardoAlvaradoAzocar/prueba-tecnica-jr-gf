import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedPageComponent } from './compoment/protected-page/protected-page.component';



@NgModule({
  declarations: [
    ProtectedPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProtectedPageModule { }
