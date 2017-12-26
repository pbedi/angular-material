import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatOptionModule, MatRadioModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule, MatNativeDateModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [MatButtonModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatExpansionModule, MatIconModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatExpansionModule, MatIconModule, MatDatepickerModule, MatNativeDateModule],
})

export class MaterialModule { }