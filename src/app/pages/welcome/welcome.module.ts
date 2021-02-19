/* Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* NgZorro Imports*/
import { NgZorroCommonModule } from '../../ng-zorro-common.module';
import { IconsProviderModule } from '../../icons-provider.module';

/* Others Imports */
//TO-DO

/* Project Imports */
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroCommonModule,
    IconsProviderModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
