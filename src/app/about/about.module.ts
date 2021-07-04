import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
  ],
})
export class AboutModule {}
