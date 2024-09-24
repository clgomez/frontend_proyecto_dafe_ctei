import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadRoutingModule } from './file-upload-routing.module';
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
import { Header2Component } from '../header2/header2.component';
import { TagModule } from 'primeng/tag';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		CommonModule,
        FileUploadRoutingModule,
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
        ReactiveFormsModule,
        CalendarModule,
        HttpClientModule


	],
	declarations: [FileUploadComponent]
})
export class FileUploadModule { }
