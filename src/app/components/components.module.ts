import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderMenuComponent
  ]
})
export class ComponentsModule { }
