import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ExperienceModule {}
