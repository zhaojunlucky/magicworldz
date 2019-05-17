import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';

@NgModule({
  declarations: [NavbarComponent, ThemePickerComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
