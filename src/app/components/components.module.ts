import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderCloseComponent } from './header-close/header-close.component';



@NgModule({
  declarations: [
    HeaderMenuComponent,
    HeaderCloseComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderMenuComponent,
    HeaderCloseComponent
  ]
})
export class ComponentsModule { }
