import { AppUploadButtonComponent } from './components/app-upload-button/app-upload-button.component';
import { RemoveConfirmationDialogComponent } from './dialogs/remove-confirmation-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    RemoveConfirmationDialogComponent,
    AppUploadButtonComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDialogModule,
    MatSortModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    RemoveConfirmationDialogComponent,
    AppUploadButtonComponent
  ],
  entryComponents: [
    RemoveConfirmationDialogComponent
  ]
})
export class SharedModule {}
