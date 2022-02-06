import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryRoutingModule } from './country-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ComponentsModule } from '../components/components.module';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    CountriesComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CountryRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    ComponentsModule,
    InfiniteScrollModule,
    MatProgressBarModule
  ]
})
export class CountryModule { }
