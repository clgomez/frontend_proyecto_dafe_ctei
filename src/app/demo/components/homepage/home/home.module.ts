import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { Header1Component } from '../header1/header1.component';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ExportService } from 'src/app/demo/service/export.service';
import { SplitButtonModule } from 'primeng/splitbutton';


@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule,
        TagModule,
        DialogModule,
        FormsModule,
        SplitButtonModule

	],
	declarations: [HomeComponent],
    providers: [ExportService]
})
export class HomeModule { }
