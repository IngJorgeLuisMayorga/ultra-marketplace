import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const COMPONENTS = [HeaderComponent, FooterComponent, LayoutComponent, CardComponent,  SpinnerComponent];
const MODULES = [RouterModule, FormsModule]

@NgModule({
  declarations: [...COMPONENTS ],
  imports: [CommonModule, ...MODULES],
  exports: [...COMPONENTS],
})
export class SharedModule {}
